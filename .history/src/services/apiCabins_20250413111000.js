import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
}

export async function createCabin(newCabin) {
  // https://fwbhmmimsefigkwbgjtu.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}`;

  // 1- create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2- upload image

  return data;
}
