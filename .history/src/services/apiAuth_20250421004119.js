import supabase from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  // get data from localStorage
  const { data: session } = await supabase.auth.getSession();
  console.log(session);
  if (session.session) return null;

  const { data, error } = supabase.auth.getUser();

  if (error) throw new Error(error.message);
  console.log(data);
  return data?.user;
}
