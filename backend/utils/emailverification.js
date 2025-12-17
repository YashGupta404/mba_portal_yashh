import dns from "dns/promises";

async function verifyEmailDomain(email) {
  try {
    // 1️⃣ Extract domain
    const domain = email.split("@")[1]?.trim();
    if (!domain) return false; // no domain part

    // 2️⃣ Check MX records
    const addresses = await dns.resolveMx(domain);

    // 3️⃣ Return true only if MX records exist
    return Array.isArray(addresses) && addresses.length > 0;
  } catch (err) {
    // 4️⃣ Catch errors (invalid domain, non-existent domain, etc.)
    return false;
  }
}

export default verifyEmailDomain;
