import supabase, { supabaseUrl } from "./supabase";

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

export async function createEditCabin(newCabin, id) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1- create cabin
  let query = await supabase.from("cabins");

  if (!id) query.insert([{ ...newCabin, image: imagePath }]).select();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2- upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3- delete cabin if error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Image could not be uploaded, cabin was not created");
  }

  return data;
}
