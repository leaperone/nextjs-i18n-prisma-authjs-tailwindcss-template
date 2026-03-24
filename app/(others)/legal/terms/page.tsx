export default function Service() {
  return (
    <div className="prose dark:prose-invert prose-slate mx-auto max-w-4xl space-y-6 px-4 py-8">
      <h1 className="mb-8 font-bold text-3xl">Terms of Service</h1>
      <p className="text-gray-500 text-sm dark:text-gray-400">Last updated: {new Date().getFullYear()}</p>

      <div className="space-y-4">
        <p>
          Please read and fully understand this agreement before using our services, especially clauses related to
          liability limitation, authorization and information use, and applicable law and dispute resolution.
        </p>
        <p>
          All other rights not expressly authorized in this agreement are reserved by this platform. This platform
          reserves the right to modify or change this agreement at any time and will notify changes by updating this
          agreement. All modifications or changes will take effect immediately upon publication on the website.
        </p>
        <div className="mt-8 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
          <h2 className="mb-4 font-semibold text-xl">Contact Us</h2>
          <p className="mb-4">
            If you need to contact us regarding any matter mentioned in this agreement, you can reach us at:
          </p>
          <p className="text-gray-600 dark:text-gray-300">Email: support@example.com</p>
        </div>
      </div>
    </div>
  );
}
