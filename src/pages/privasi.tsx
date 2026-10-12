import { LegalPage, LegalSection } from "@/components/legal-page";

export function PrivasiPage() {
  return (
    <LegalPage
      title="Kebijakan Privasi"
      updated="Oktober 2026"
      intro="Kami menghargai kepercayaan Anda. Kebijakan ini menjelaskan data apa yang kami kumpulkan, bagaimana data digunakan, dan hak Anda atas data tersebut."
    >
      <LegalSection heading="Data yang kami kumpulkan">
        <p>
          Untuk keperluan daftar tunggu, kami mengumpulkan nama dan alamat email
          yang Anda berikan secara sukarela. Jika Anda menggunakan Koleva di
          kemudian hari, kami juga dapat memproses data kelompok dan catatan
          transaksi yang Anda buat di dalam aplikasi.
        </p>
      </LegalSection>

      <LegalSection heading="Penggunaan data">
        <p>
          Data daftar tunggu digunakan hanya untuk mengirimkan pemberitahuan
          terkait pembukaan akses Koleva. Kami tidak menjual atau membagikan
          data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran.
        </p>
      </LegalSection>

      <LegalSection heading="Keamanan data">
        <p>
          Kami berupaya melindungi data dengan langkah teknis dan organisasi
          yang wajar. Namun, tidak ada metode transmisi atau penyimpanan data
          yang sepenuhnya bebas risiko.
        </p>
      </LegalSection>

      <LegalSection heading="Hak Anda">
        <p>
          Anda dapat meminta akses, koreksi, atau penghapusan data pribadi Anda
          dengan menghubungi kami di halo@koleva.id. Kami akan menindaklanjuti
          permintaan tersebut sesuai ketentuan yang berlaku.
        </p>
      </LegalSection>
    </LegalPage>
  );
}