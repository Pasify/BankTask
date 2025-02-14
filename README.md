# PRACTICAL TEST

## Project Structure

### Online Banking Login Form

The login form task is accessible on the main route (`/`). It includes:

- Email and password fields
- Form validation (e.g., password length, valid email format)
- Error handling with user-friendly messages

### Transaction History

The transaction history task is accessible on the `/transactions` route. It displays:

- A secure component showing a user's transaction history using dummy JSON data
- Proper accessibility and formatting for a seamless user experience

---

# THEORETICAL TEST

#SECTION A: Financial Application Development: Key Considerations

working on a financial application, involves stepping into a world where security, compliance, and reliability are non-negotiable. Let me break down the key things are to be kept in mind to build a robust and trustworthy system

---

## 1. **Key Security Considerations for Financial Apps**

When it comes to financial apps, security isn’t just a feature that could be randomly added, it’s the foundation. Here’s what one need to focus on:

### a. **Encrypt Everything**

- **Why it’s important**: Imagine someone intercepting credit card details or bank account info. This sounds really Scar; So, encryption ensures that even if data is stolen, it’s useless without the decryption key.
- **How to do it**: Use TLS (Transport Layer Security) for data in transit (like when a user submits a payment) and AES (Advanced Encryption Standard) for data at rest (like when it’s stored in your database).

### b. **Lock Down Access**

- **Why it’s important**: Not everyone should have access to sensitive data. An unhappy employee or a hacked account could wreak havoc.
- **How to do it**: Implement multi-factor authentication (MFA) and role-based access control (RBAC). For example, a customer support representative should not have access to financial records, ONLY the finance team should.

### c. **Sanitize User Inputs**

- **Why it’s important**: Hackers love to exploit poorly validated inputs. A simple SQL injection or XSS attack can compromise the entire system.
- **How to do it**: Using libraries like `validator.js` to clean up user inputs and always use parameterized queries for database interactions.

### d. **Secure Your APIs**

- **Why it’s important**: APIs are the backbone of modern apps, but they’re also a prime target for attackers.
- **How to do it**: Use OAuth 2.0 for authentication and implement rate limiting to prevent abuse (e.g., stopping someone from spamming your payment API), and not forgetting to apply alot of validation logic on the frontend as well.

### e. **Keep a Paper Trail**

- **Why it’s important**: If something goes wrong, you will need to know who did what and when.
- **How to do it**: Log all transactions and access to sensitive data. For example, log every time someone views a customer’s financial records, including their user ID and timestamp.

### f. **Test, Test, Test**

- **Why it’s important**: Security isn’t a one-time thing. New vulnerabilities pop up all the time and are evolving in it's shape.
- **How to do it**: Regularly conduct penetration testing and code reviews. Think of it like a health checkup for your app.

---

## 2. **Why Compliance Standards Like PCI-DSS and GDPR Matter**

Compliance isn’t just about avoiding fines, it is about building trust. Here’s why these standards are a big deal:

### a. **PCI-DSS (Payment Card Industry Data Security Standard)**

- **What it is**: A set of rules to ensure that companies handling credit card data keep it secure.
- **Why it matters**: If you don’t comply, you could face massive fines and lose the ability to process payments.
- **Example**: If you’re building a payment gateway, you must encrypt cardholder data and restrict access to it. No cutting corners!

### b. **GDPR (General Data Protection Regulation)**

- **What it is**: A law that protects the personal data of EU citizens.
- **Why it matters**: Non-compliance can cost you up to 4% of your global revenue. Thats a lot of loss in the grand scheme of things!
- **Example**: If your app collects user data, you need explicit consent and must allow users to delete their data if they ask.

---

## 3. **Idempotency: The Unsung Hero of Financial Transactions**

### a. **What is Idempotency?**

- Idempotency means that no matter how many times you perform an operation, the result is the same. Think of it like a light switch, flipping it multiple times doesn’t change the outcome.
- **Example**: If a user clicks “Pay Now” twice because the page is slow, they shouldn’t be charged twice. The second request should just return the result of the first one.

### b. **Why is it Crucial?**

- **Prevents Double Charges**: Users will not be happy if they are billed multiple times for the same transaction.
- **Handles Network Issues**: If a request fails and the user retries, the system should handle it gracefully.
- **How to Implement It**: Use unique transaction IDs for each operation. When a request comes in, check if it’s already been processed before acting on it.

---

## 4. **Handling Sensitive Customer Data: Risks and Mitigation**

### a. **What Could Go Wrong?**

- **Data Breaches**: Hackers could steal customer data, leading to identity theft or fraud.
- **Regulatory Fines**: Non-compliance with laws like GDPR or PCI-DSS can result in massive penalties.
- **Reputation Damage**: If customers lose trust in your app, they’ll take their business elsewhere.

### b. **How to Protect Your App and Your Users**

- **Encrypt Everything**: Make sure sensitive data is encrypted both in transit and at rest.
- **Limit Access**: Only give access to those who absolutely need it. For example, your marketing team doesn’t need to see credit card numbers.
- **Collect Only What You Need**: Don’t ask for unnecessary data. The less you store, the less you risk.
- **Regular Audits**: Test your system regularly for vulnerabilities. It’s like going to the dentist—preventative care saves you from bigger problems down the line.
- **Have a Plan**: If a breach happens, you need to act fast. Have an incident response plan in place to minimize damage.

---

## **Final Thoughts**

Building a financial application is no small feat. It is not just about writing code, it is about creating a system that users can trust with their money and personal information. By focusing on security, compliance, and reliability, you are not just building an app; you’re building trust and new experience for the end user

# SECTION B: Frontend Development

## 1. Ensuring a User-Friendly and Secure UI/UX for a Banking Web Application

To make the application user-friendly, I’d focus on simplicity and accessibility. Clear navigation, readable fonts, intuitive layouts, and consistent design help users find what they need easily. I’d also prioritize mobile responsiveness, as many users rely on their phones for banking.

For security, I’d implement multi-factor authentication (MFA), proper session management (like auto-logout for inactivity), and secure password handling. Additionally, features like user-friendly error messages (e.g., “Your password must contain a number” instead of technical jargon) ensure a smooth experience while maintaining safety.

## 2. Role of Form Validation and Data Masking in Financial Applications

Form validation ensures that data entered by users is correct and secure. For example, validating account numbers, email addresses, or limiting password fields to secure formats prevents errors or misuse.

Data masking protects sensitive information, like showing “\*\*\*\*” instead of full credit card numbers. This adds a layer of privacy, especially when users are accessing the app in public or shared spaces. Together, these practices safeguard data while preventing frustration from mistakes or insecure inputs.

## 3. Handling Real-Time Data Updates in a React Application

To handle real-time updates like account balance changes, I’d use tools like WebSockets or libraries such as Socket.IO to establish a live connection with the server. This ensures instant updates without refreshing the page.

For React specifically, I’d manage these updates using state management tools like Redux or the Context API, ensuring changes are reflected across the app efficiently. User feedback, like subtle animations or loading spinners, can also improve the real-time experience by showing progress or confirmation.

## 4. What Are Progressive Web Apps (PWAs) and Their Benefits to Financial Institutions?

PWAs are web applications that behave like mobile apps—they can work offline, load quickly, and be added to a home screen without needing an app store.

For financial institutions, PWAs offer a cost-effective way to provide a mobile-friendly experience to users without requiring them to download an app. They’re especially beneficial in areas with poor connectivity since they can cache data and work offline. This ensures users can access critical features like viewing balances or transactions even without an internet connection.
