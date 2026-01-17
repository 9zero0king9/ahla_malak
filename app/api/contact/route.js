export const metadata = {
  robots: 'noindex, nofollow'
};

export async function POST(req) {
  const body = await req.json();
  
  // استخدم WhatsApp API أو خدمة بريد
  console.log('رسالة جديدة:', body);
  
  return Response.json(
    { message: 'تم استقبال رسالتك' },
    { status: 200 }
  );
}
