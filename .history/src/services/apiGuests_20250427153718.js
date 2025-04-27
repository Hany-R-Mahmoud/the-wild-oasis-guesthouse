import supabase from "./supabase";

export async function getGuests() {
  const { data, error } = await supabase.from("guests").select("*");

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}

export async function createGuest() {
  const { data, error } = await supabase
    .from("guests")
    .insert([{ some_column: "someValue", other_column: "otherValue" }])
    .select();
}
