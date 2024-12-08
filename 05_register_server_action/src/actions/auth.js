"use server";

export async function register(state, formData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  console.log(email);
  console.log(password);
  console.log(confirmPassword);
}
