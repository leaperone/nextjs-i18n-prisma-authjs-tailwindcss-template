import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { getUserInfo } from '@/actions/user';

export default async function Dashboard() {
  const session = await auth();
  const user = session?.user;
  if (!user) {
    redirect('/signin');
  }

  const userInfo = await getUserInfo();

  return (
    <div className="mx-auto h-full max-w-7xl space-y-6 overflow-y-auto p-4">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-full md:col-span-3">
          <p>{userInfo?.id}</p>
        </div>
      </div>
    </div>
  );
}
