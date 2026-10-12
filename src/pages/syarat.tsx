import { LegalPage, LegalSection } from "@/components/legal-page";

export function SyaratPage() {
  return (
    <LegalPage
      title="Syarat & Ketentuan"
      updated="Oktober 2026"
      intro="Dengan mendaftar ke daftar tunggu atau menggunakan Koleva, Anda menyetujui ketentuan berikut. Bacalah dengan saksama."
    >
      <LegalSection heading="Tentang layanan">
        <p>
          Koleva adalah aplikasi yang membantu kelompok mencatat dan mengelola
          tabungan serta dana bersama. Koleva bukan lembaga keuangan dan tidak
          menyediakan layanan perbankan, pinjaman, atau investasi.
        </p>
      </LegalSection>

      <LegalSection heading="Tanggung jawab pengguna">
        <p>
          Anda bertanggung jawab atas keakuratan data yang Anda masukkan dan
          atas penggunaan aplikasi sesuai kesepakatan kelompok Anda. Setiap
          keputusan pencairan dana merupakan tanggung jawab kelompok yang
          bersangkutan.
        </p>
      </LegalSection>

      <LegalSection heading="Daftar tunggu">
        <p>
          Pendaftaran daftar tunggu tidak menjamin akses langsung ke layanan.
          Kami akan menghubungi Anda melalui email saat akses dibuka secara
          bertahap.
        </p>
      </LegalSection>

      <LegalSection heading="Perubahan ketentuan">
        <p>
          Kami dapat memperbarui ketentuan ini seiring berkembangnya layanan.
          Perubahan penting akan kami sampaikan melalui kanal resmi Koleva.
        </p>
      </LegalSection>
    </LegalPage>
  );
}