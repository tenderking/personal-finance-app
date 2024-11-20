import { Form, } from "@remix-run/react";
import BaseField from "~/components/shared/BaseField";
import { Button } from "~/components/shared/Button";
import IconEye from "~/components/shared/Icons/IconEye";




interface AuthComponentProps {
  type: string;
  actionData?: {
    errors?: {
      name?: string;
      email?: string;
      password?: string;
    };
  };
}

export default function AuthComponent({ type, actionData }: AuthComponentProps) {
  const isLogin = type === "login";

  return (
    <Form method="post" className="space-y-4">
      {/* Name Field */}
      {!isLogin && (
        <BaseField
          label="Name"
          inputType="text"
          name="name"
          placeholder="Enter your name"
          helperText={actionData?.errors?.name}
        />
      )}
      {/* Email Field */}
      <BaseField
        label="Email"
        inputType="email"
        name="email"
        placeholder="Enter your email"
        helperText={actionData?.errors?.email}
      />

      {/* Password Field */}
      <BaseField
        label="Password"
        inputType="password"
        name="password"
        rightIcon={IconEye}
        placeholder="Enter your password"
        helperText={actionData?.errors?.password}
      />

      {/* Submit Button */}
      <Button label={"Submit"} variant="primary" type="submit" />
    </Form>
  );
}



