/**
 * Test Script for Resume Analyser - with file output
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Test resumes for each specialization
const TEST_RESUMES = [
    // FINANCE (3)
    { filename: 'resume_finance_1.txt', expectedSpecialization: 'finance' },
    { filename: 'resume_finance_2.txt', expectedSpecialization: 'finance' },
    { filename: 'resume_finance_3.txt', expectedSpecialization: 'finance' },
    // ANALYTICS (3)
    { filename: 'resume_analytics_1.txt', expectedSpecialization: 'business-analytics' },
    { filename: 'resume_analytics_2.txt', expectedSpecialization: 'business-analytics' },
    { filename: 'resume_analytics_3.txt', expectedSpecialization: 'business-analytics' },
    // MARKETING (3)
    { filename: 'resume_marketing_1.txt', expectedSpecialization: 'marketing' },
    { filename: 'resume_marketing_2.txt', expectedSpecialization: 'marketing' },
    { filename: 'resume_marketing_3.txt', expectedSpecialization: 'marketing' },
    // OPERATIONS (2)
    { filename: 'resume_operations_1.txt', expectedSpecialization: 'operations' },
    { filename: 'resume_operations_2.txt', expectedSpecialization: 'operations' },
    // HR (2)
    { filename: 'resume_hr_1.txt', expectedSpecialization: 'hr' },
    { filename: 'resume_hr_2.txt', expectedSpecialization: 'hr' },
    // ENTREPRENEURSHIP (2)
    { filename: 'resume_entrepreneurship_1.txt', expectedSpecialization: 'entrepreneurship' },
    { filename: 'resume_entrepreneurship_2.txt', expectedSpecialization: 'entrepreneurship' }
];

async function testResumeAnalyser() {
    const API_URL = 'http://localhost:5000';

    let correctPredictions = 0;
    let totalTests = 0;
    const results = [];
    let output = '';

    output += '='.repeat(70) + '\n';
    output += 'RESUME ANALYSER TEST RESULTS\n';
    output += 'Test Date: ' + new Date().toISOString() + '\n';
    output += '='.repeat(70) + '\n\n';

    for (const resume of TEST_RESUMES) {
        totalTests++;

        try {
            // Read resume content
            const resumePath = path.join(__dirname, resume.filename);
            const resumeText = fs.readFileSync(resumePath, 'utf-8');

            // Send resume text for analysis
            const response = await fetch(`${API_URL}/api/mba-fit/resume/analyze-text`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ resumeText })
            });

            const data = await response.json();

            if (data.success && data.data.primaryMatch) {
                const predictedSpec = data.data.primaryMatch.id;
                const expectedSpec = resume.expectedSpecialization;
                const isCorrect = predictedSpec === expectedSpec;

                if (isCorrect) correctPredictions++;

                results.push({
                    resume: resume.filename,
                    expected: expectedSpec,
                    predicted: predictedSpec,
                    correct: isCorrect,
                    score: data.data.primaryMatch.score,
                    secondaryMatch: data.data.secondaryMatch?.id
                });

                const status = isCorrect ? 'CORRECT' : 'WRONG';
                output += `[${status}] ${resume.filename}\n`;
                output += `    Expected: ${expectedSpec}\n`;
                output += `    Predicted: ${predictedSpec} (Score: ${data.data.primaryMatch.score})\n`;
                if (!isCorrect) {
                    output += `    Secondary: ${data.data.secondaryMatch?.id}\n`;
                }
                output += '\n';
            } else {
                output += `[ERROR] ${resume.filename}: ${data.error || 'Unknown error'}\n\n`;
                results.push({
                    resume: resume.filename,
                    expected: resume.expectedSpecialization,
                    predicted: 'ERROR',
                    correct: false
                });
            }
        } catch (error) {
            output += `[ERROR] ${resume.filename}: ${error.message}\n\n`;
            results.push({
                resume: resume.filename,
                expected: resume.expectedSpecialization,
                predicted: 'ERROR',
                correct: false
            });
        }
    }

    // Summary
    output += '='.repeat(70) + '\n';
    output += 'SUMMARY\n';
    output += '='.repeat(70) + '\n';
    output += `Total Tests: ${totalTests}\n`;
    output += `Correct: ${correctPredictions}\n`;
    output += `Wrong: ${totalTests - correctPredictions}\n`;
    output += `ACCURACY: ${((correctPredictions / totalTests) * 100).toFixed(1)}%\n\n`;

    // By specialization
    output += 'Results by Specialization:\n';
    const specGroups = {};
    results.forEach(r => {
        if (!specGroups[r.expected]) {
            specGroups[r.expected] = { total: 0, correct: 0, wrong: [] };
        }
        specGroups[r.expected].total++;
        if (r.correct) specGroups[r.expected].correct++;
        else specGroups[r.expected].wrong.push(r);
    });

    for (const [spec, data] of Object.entries(specGroups)) {
        const accuracy = ((data.correct / data.total) * 100).toFixed(0);
        output += `  ${spec}: ${data.correct}/${data.total} (${accuracy}%)\n`;
        if (data.wrong.length > 0) {
            data.wrong.forEach(w => {
                output += `    - ${w.resume} -> predicted as ${w.predicted}\n`;
            });
        }
    }

    // Write to file
    const reportPath = path.join(__dirname, 'test-report.txt');
    fs.writeFileSync(reportPath, output, 'utf-8');

    console.log(output);
    console.log(`\nReport saved to: ${reportPath}`);

    return { correctPredictions, totalTests, accuracy: (correctPredictions / totalTests) * 100 };
}

testResumeAnalyser().catch(console.error);
