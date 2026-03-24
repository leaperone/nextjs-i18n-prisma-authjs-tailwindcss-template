export default function PrivacyPolicy() {
  return (
    <div className="prose dark:prose-invert prose-slate mx-auto max-w-4xl space-y-6 px-4 py-8">
      <h1 className="mb-8 font-bold text-3xl">Privacy Policy</h1>
      <p className="text-gray-500 text-sm dark:text-gray-400">Last updated: {new Date().getFullYear()}</p>

      <div className="space-y-4">
        <div className="my-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-gray-600 leading-relaxed dark:text-gray-300">
            We take the protection of your personal information and privacy very seriously.
          </p>
        </div>

        <h2 className="mt-8 mb-4 font-semibold text-gray-900 text-xl dark:text-gray-100">1. Important Notice</h2>
        <p>
          We may revise this privacy policy from time to time due to changes in services, contact methods, laws, and
          regulatory requirements. When privacy policy changes occur, we will publish the updated version on our
          platform. If you continue to use our services, it means you have fully read, understood, and agreed to be
          bound by the revised privacy policy.
        </p>
        <div className="mt-8 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
          <h2 className="mb-4 font-semibold text-xl">Contact Us</h2>
          <p className="mb-4">
            If you need to contact us regarding any matter mentioned in this privacy policy, you can reach us at:
          </p>
          <p className="text-gray-600 dark:text-gray-300">Email: support@example.com</p>
        </div>
      </div>
    </div>
  );
}
