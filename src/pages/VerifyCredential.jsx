import { useState, useEffect, useMemo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import certificates from "../data/certificates.json";

const formatVerifiedAt = (date) => {
  const datePart = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const timePart = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return `${datePart}, ${timePart}`;
};

const normalize = (value) => value.trim().toLowerCase();

function DetailRow({ label, value, valueClassName = "" }) {
  return (
    <div className="flex flex-col gap-1 border-b border-[#E1E5F5] py-4 last:border-b-0 sm:border-b-0 sm:py-5">
      <span className="font-[JetBrains_Mono] text-xs uppercase tracking-wide text-[#5B6178]">
        {label}
      </span>
      <span className={`text-base font-medium text-[#10142B] ${valueClassName}`}>
        {value}
      </span>
    </div>
  );
}

export default function VerifyCredential() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [certificateId, setCertificateId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [matchedCertificate, setMatchedCertificate] = useState(null);
  const [verifiedAt, setVerifiedAt] = useState(null);

  const certificateIndex = useMemo(() => {
    const map = new Map();
    certificates.forEach((cert) => {
      map.set(normalize(cert.certificateId), cert);
    });
    return map;
  }, []);

  const runVerification = useCallback(
    (idToVerify) => {
      const trimmedId = idToVerify.trim();
      if (!trimmedId) return;

      setIsLoading(true);
      setResult(null);

      setTimeout(() => {
        const match = certificateIndex.get(normalize(trimmedId));

        if (match) {
          setMatchedCertificate(match);
          setVerifiedAt(new Date());
          setResult("found");
        } else {
          setMatchedCertificate(null);
          setVerifiedAt(null);
          setResult("not-found");
        }

        setIsLoading(false);
      }, 500);
    },
    [certificateIndex]
  );

  useEffect(() => {
    const idFromUrl = searchParams.get("id");
    if (idFromUrl) {
      setCertificateId(idFromUrl);
      runVerification(idFromUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!certificateId.trim() || isLoading) return;

    setSearchParams({ id: certificateId.trim() });
    runVerification(certificateId);
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-[#E1E5F5] bg-[#F8FAFF]">
        <div className="max-w-[1180px] mx-auto px-8 py-24 text-center">
          <span className="animate-fade-up inline-block rounded-full border border-[#E1E5F5] bg-white px-4 py-1.5 font-[JetBrains_Mono] text-xs font-medium tracking-wide text-[#3B4FE0]">
            Credential Verification
          </span>

          <h1 className="animate-fade-up mt-6 text-4xl font-semibold tracking-tight text-[#10142B] sm:text-5xl">
            Verify a LoopAngan Certificate
          </h1>

          <p className="animate-fade-up mx-auto mt-5 max-w-[560px] text-base text-[#5B6178] sm:text-lg">
            Instantly verify whether a certificate issued by LoopAngan is authentic.
          </p>
        </div>
      </section>

      <div className="max-w-[1180px] mx-auto px-8">
        <section className="animate-fade-up -mt-12 rounded-2xl border border-[#E1E5F5] bg-white p-8 shadow-md sm:p-10">
          <form onSubmit={handleSubmit} className="mx-auto max-w-[640px]">
            <label htmlFor="certificateId" className="block font-[JetBrains_Mono] text-xs font-medium uppercase tracking-wide text-[#5B6178]">
              Certificate ID
            </label>

            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                id="certificateId"
                type="text"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                placeholder="LA-PY-2083-000001"
                aria-label="Certificate ID"
                autoComplete="off"
                spellCheck="false"
                className="w-full flex-1 rounded-2xl border border-[#E1E5F5] bg-white px-5 py-3.5 font-[JetBrains_Mono] text-base text-[#10142B] placeholder:text-[#B7BCD6] outline-none transition focus:border-[#3B4FE0] focus:ring-2 focus:ring-[#3B4FE0]/20"
              />

              <button
                type="submit"
                disabled={isLoading || !certificateId.trim()}
                className="flex items-center justify-center gap-2 rounded-full bg-[#3B4FE0] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#232F9E] focus:outline-none focus:ring-2 focus:ring-[#3B4FE0]/40 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
                    Verifying...
                  </>
                ) : (
                  "Verify"
                )}
              </button>
            </div>
          </form>

          {result === "found" && matchedCertificate && (
            <div className="animate-fade-up mx-auto mt-10 max-w-[720px] rounded-2xl border border-[#E1E5F5] bg-[#F8FAFF] p-8 sm:p-10">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0F9D58]">
                  <span className="text-2xl text-white" aria-hidden="true">✔</span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-[#10142B]">Certificate Verified</h2>
                <p className="mt-2 max-w-[440px] text-sm text-[#5B6178]">
                  This certificate is authentic and has been issued by LoopAngan.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-x-10 rounded-2xl border border-[#E1E5F5] bg-white px-6 py-2 sm:grid-cols-2 sm:px-8">
                <DetailRow label="Student Name" value={matchedCertificate.studentName} />
                <DetailRow label="Certificate ID" value={matchedCertificate.certificateId} valueClassName="font-[JetBrains_Mono]" />
                <DetailRow label="Course" value={matchedCertificate.course} />
                <DetailRow label="Issue Date" value={matchedCertificate.issueDate} />
                <DetailRow
                  label="Status"
                  value={
                    <span className="inline-flex items-center rounded-full bg-[#0F9D58]/10 px-3 py-1 font-[JetBrains_Mono] text-xs font-semibold tracking-wide text-[#0F9D58]">
                      VALID
                    </span>
                  }
                />
              </div>

              <div className="mt-8 flex flex-col items-center gap-1 border-t border-[#E1E5F5] pt-6 text-center">
                <p className="font-[JetBrains_Mono] text-xs font-semibold tracking-wide text-[#3B4FE0]">
                  ✔ Verified by LoopAngan
                </p>
                {verifiedAt && (
                  <p className="text-xs text-[#5B6178]">
                    Verified on: {formatVerifiedAt(verifiedAt)}
                  </p>
                )}
              </div>
            </div>
          )}

          {result === "not-found" && (
            <div className="animate-fade-up mx-auto mt-10 max-w-[640px] rounded-2xl border border-[#E1E5F5] bg-[#F8FAFF] p-8 text-center sm:p-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E0234D]">
                <span className="text-2xl text-white" aria-hidden="true">✕</span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-[#10142B]">Certificate Not Found</h2>
              <p className="mx-auto mt-2 max-w-[440px] text-sm text-[#5B6178]">
                We couldn&apos;t find a certificate matching this Certificate ID. Please check the ID and try again.
              </p>
            </div>
          )}
        </section>

        <section className="animate-fade-up my-20 rounded-2xl border border-[#E1E5F5] bg-[#F8FAFF] px-8 py-10 text-center sm:px-16">
          <h3 className="text-xl font-semibold text-[#10142B]">Why Verification Matters</h3>
          <p className="mx-auto mt-3 max-w-[560px] text-sm text-[#5B6178]">
            Every LoopAngan certificate contains a unique Certificate ID. If a certificate has been altered or forged, verification will fail.
          </p>
        </section>
      </div>
    </main>
  );
}