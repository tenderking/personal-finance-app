

import { ActionFunctionArgs } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import Auth from "~/features/auth/components/AuthForm";
import authValidationSchema from "~/features/auth/validate";

export default function Signup() {
  const actionData = useActionData() as { errors?: { name?: string; email?: string; password?: string } };
  return (
    <div className="flex bg-beige-100 h-screen items-center justify-center">
      <div className="bg-white  p-8 rounded-lg">

        <h1
          className="text-3xl font-bold text-left mb-4"
        >
          Register
        </h1>
        <Auth type="signup" actionData={actionData} />

        <p className="text-center mt-4">
          Already have an account? <a href="/login" className="text-green-500">Sign up</a>
        </p>
      </div>

    </div>
  );
}

export async function action({
  request,
}: ActionFunctionArgs) {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");

  const result = authValidationSchema.safeParse({
    email: email as string,
    password: password as string,
  });

  if (!result.success) {
    return new Response(JSON.stringify({ errors: result.error.flatten().fieldErrors }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify({ message: `Login info: Email - ${email}, Password - ${password}` }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });

}
