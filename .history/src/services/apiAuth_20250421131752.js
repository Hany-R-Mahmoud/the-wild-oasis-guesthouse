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
  // console.log(session);
  if (!session.session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  // console.log(user);
  return user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function updateCurrentUser({ password, fullName, Avatar }) {
  // 1- update password or fullName

  const { data, error } = await supabase.auth.updateUser({
    fullName,
    password,
    data: { hello: "world" },
  });

  // 2- upload Avatar

  if (error) throw new Error(error.message);

  return data;
}
