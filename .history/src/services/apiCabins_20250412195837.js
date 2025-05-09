import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabins() {
  const { error } = await supabase
    .from("cabins")
    .delete()
    .eq("some_column", "someValue");
}
