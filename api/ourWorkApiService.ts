const NEXT_PUBLIC_BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export async function fetchProjectsData(lang = "ar") {
  try {
    const response = await fetch(`${NEXT_PUBLIC_BACKEND_BASE_URL}`, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lang,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Failed to fetch our work data:", data);
      return { success: false, message: "Failed To Fetch Our Work Data" };
    }

    return data;
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal Server Error";
    console.error("Home data fetch error:", errorMessage);
    return { success: false, message: errorMessage };
  }
}
