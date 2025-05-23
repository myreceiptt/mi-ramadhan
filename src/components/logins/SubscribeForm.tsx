// /src/components/logins/SubscribeForm.tsx

// External libraries
import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatusMessage(""); // Clear previous messages

    // Basic Email Validation
    if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setStatusMessage("Masukkan alamat email dengan benar.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: "Di RAMADHAN.VOYAGE.CO.ID ada subscriber baru.",
          name: "Pengunjung RAMADHAN.VOYAGE.CO.ID",
          email,
          message:
            "Assalamualaikum! I want to subscribe to your latest updates.",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatusMessage("Terimakasih sudah subscribe!");
        setEmail(""); // Clear input field
      } else {
        setStatusMessage("Subscribe gagal. Silahkan coba lagi.");
      }
    } catch (error) {
      console.error("Subscription error:", error); // Logs the error to console
      setStatusMessage("Terjadi error. Coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h3 className="sm:text-left text-center text-xs sm:text-sm md:text-base font-semibold text-back-ground">
        Jangan Lewatkan Update Terbaru Dari Kami
      </h3>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="w-full flex flex-row sm:justify-start justify-center mt-2">
          <input
            type="email"
            name="email"
            placeholder="Masukkan alamat email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-xs md:text-sm w-2/3 lg:w-3/5 px-2 py-0 border border-border-tombol rounded-l-lg bg-transparent focus:outline-hidden placeholder-border-tombol text-back-ground"
            disabled={loading}
          />
          <button
            type="submit"
            className="text-xs md:text-sm px-6 py-2 bg-back-ground font-semibold rounded-r-lg text-hitam-judul-body cursor-pointer"
            disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
      </form>

      {/* Success/Error Message */}
      {statusMessage && (
        <h4 className="text-center sm:text-left text-sm font-medium text-border-tombol mt-2">
          {statusMessage}
        </h4>
      )}
    </>
  );
}
