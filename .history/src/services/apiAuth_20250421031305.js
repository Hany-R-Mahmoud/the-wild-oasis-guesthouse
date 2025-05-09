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


export async signUp(){
  
const { data, error } = await supabase.auth.signUp({
 
})

if (error) throw new Error(error.message);

return data;

}