import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar'
import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async'

interface PolicySectionProps {
  number: number;
  title: string;
  children: ReactNode;
}

function PolicySection({
  number,
  title,
  children,
}: PolicySectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-[#205090] md:text-2xl">
        {number}. {title}
      </h2>

      <div className="space-y-4 leading-7 text-gray-700">
        {children}
      </div>
    </section>
  );
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6 marker:text-[#205090]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicy() {
  return (
     <>
        <Helmet>
            <title>Privacy Policy | Olympic Park Pharmacy</title>
            <meta
                name="description"
                content="Contact Olympic Park Privacy Policy"
            />
    
            <meta
                name="keywords"
                content="Olympic Park Pharmacy, pharmacy, prescription refill, Calgary pharmacy, medication review"
            />
        </Helmet>
        <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-blue-50">
            <Navbar />
            <main className="min-h-screen bg-gray-50">
                <section className="px-6 text-white">
                    <div className="flex flex-col justify-center items-center pt-15">
                        <span className="inline-flex items-center rounded-full border border-blue-100 bg-white px-2 py-1 text-xs font-semibold text-main shadow-sm">
                            Olympic Park Community Pharmacy
                        </span>
                        <span className="mt-6 inline-block text-3xl md:text-6xl font-bold text-main">
                            Privacy Policy
                        </span>
                        <span className="inline-block text-sm md:text-lg font-normal text-slate-600 mt-4">
                            Updated on June 17, 2026
                        </span>
                    </div>
                </section>


                <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 md:py-6">
                    <article className="space-y-10 rounded-2xl bg-white p-6 shadow-sm sm:p-10 md:p-12">
                        <div className="space-y-4 border-b border-gray-200 pb-8 leading-7 text-gray-700 text-left">
                            <p>
                                Thank you for visiting{" "}
                                <a
                                    href="https://olympicparkpharmacy.ca"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-[#205090] underline decoration-blue-200 underline-offset-4 hover:decoration-[#205090]"
                                >
                                    olympicparkpharmacy.ca
                                </a>
                                    . Your privacy is important to us.
                            </p>

                            <p>
                                This Privacy Policy explains how Olympic Park Community
                                Pharmacy, referred to as “we,” “us,” or “our,” collects,
                                uses, discloses, and protects personal information when
                                you use our website and services.
                            </p>
                        </div>

                        <div className="space-y-10 text-left">
                            <PolicySection number={1} title="Information We Collect">
                                <p>
                                    We collect personal information about you only when
                                    necessary to provide services, respond to inquiries, or
                                    improve our website. This may include:
                                </p>

                                <div>
                                    <h3 className="mb-3 font-semibold text-gray-900">
                                        Personal Identifiers
                                    </h3>

                                    <PolicyList
                                        items={[
                                        "Your name",
                                        "Date of birth",
                                        "Email address",
                                        "Phone number",
                                        "Prescription details",
                                        ]}
                                    />
                                </div>

                                <div>
                                    <h3 className="mb-3 font-semibold text-gray-900">
                                        Electronic and Usage Information
                                    </h3>

                                    <PolicyList
                                        items={[
                                        "IP address",
                                        "Browser type and settings",
                                        "Pages visited and actions taken on the website",
                                        "Cookies and similar tracking technologies",
                                        ]}
                                    />
                                </div>

                                <p>
                                    We do not collect sensitive personal health information
                                    through the website unless you expressly submit it
                                    through secure, purpose specific forms.
                                </p>
                            </PolicySection>

                            <PolicySection number={2} title="How We Collect Information">
                                <p>We collect personal information when you:</p>

                                <PolicyList
                                items={[
                                    "Submit a prescription transfer request or appointment request form",
                                    "Communicate with us by email, phone, or through the website",
                                    "Interact with cookies or analytics services",
                                ]}
                                />
                            </PolicySection>

                            <PolicySection number={3} title="Purpose of Collection">
                                <p>
                                    We collect and use personal information for the following
                                    purposes:
                                </p>

                                <PolicyList
                                    items={[
                                        "To respond to your inquiries or requests",
                                        "To provide and improve our services",
                                        "To administer and secure the website",
                                        "To comply with legal and regulatory requirements",
                                    ]}
                                />

                                <p>
                                    We will only collect, use, and disclose personal
                                    information with your knowledge and consent, except where
                                    otherwise required by law.
                                </p>
                            </PolicySection>

                            <PolicySection number={4} title="Legal Basis for Processing">
                                <p>
                                    Our collection and use of personal information is governed
                                    by the Personal Information Protection and Electronic
                                    Documents Act, also known as PIPEDA, and applicable
                                    provincial privacy laws.
                                </p>

                                <p>
                                    These laws require that information is collected for
                                    legitimate purposes that have been identified to you, and
                                    only with your consent.
                                </p>
                            </PolicySection>

                            <PolicySection
                                number={5}
                                title="Use of Cookies and Tracking Tools"
                            >
                                <p>We use cookies and similar technologies to:</p>

                                <PolicyList
                                    items={[
                                        "Improve your user experience",
                                        "Analyze how the website is used",
                                        "Remember preferences and settings",
                                    ]}
                                />

                                <p>
                                    You can set your browser to refuse cookies or notify you
                                    when cookies are being used. However, some features of the
                                    website may not function properly without them.
                                </p>
                            </PolicySection>

                            <PolicySection
                                number={6}
                                title="Sharing Your Personal Information"
                            >
                                <p>We may share personal information with:</p>

                                <PolicyList
                                    items={[
                                        "Service providers who help operate our website or deliver services",
                                        "Third parties with your consent",
                                        "Law enforcement, regulators, or other parties as required by applicable law",
                                    ]}
                                />

                                <p>
                                    We do not sell or lease your personal information to
                                    unrelated third parties.
                                </p>
                            </PolicySection>

                            <PolicySection number={7} title="Data Security">
                                <p>
                                    We use reasonable technical and organizational safeguards
                                    to protect personal information against unauthorized
                                    access, modification, or disclosure.
                                </p>

                                <p>
                                    We maintain administrative, physical, and electronic
                                    measures appropriate to the sensitivity of the information
                                    collected. However, no internet transmission is completely
                                    secure.
                                </p>
                            </PolicySection>

                            <PolicySection
                                number={8}
                                title="Retention of Personal Information"
                            >
                                <p>
                                    We retain personal information only for as long as
                                    necessary to fulfill the purposes outlined in this Privacy
                                    Policy or as required by law.
                                </p>

                                <p>
                                    Once the information is no longer needed, it will be
                                    securely destroyed.
                                </p>
                            </PolicySection>

                            <PolicySection
                                number={9}
                                title="Access, Correction and Consent Withdrawal"
                            >
                                <p>You have the right to:</p>

                                <PolicyList
                                    items={[
                                        "Request access to personal information we hold about you",
                                        "Request corrections to inaccurate or incomplete information",
                                        "Withdraw consent for our continued use of your personal information",
                                    ]}
                                />

                                <p>
                                    To exercise these rights, please contact us using the
                                    details below.
                                </p>
                            </PolicySection>

                            <PolicySection number={10} title="Children’s Privacy">
                                <p>
                                    Our website is not intended for use by individuals under
                                    the age of 13. We do not knowingly collect personal
                                    information from children without verified parental
                                    consent.
                                </p>
                            </PolicySection>

                            <PolicySection number={11} title="Changes to This Policy">
                                <p>
                                    We may update this Privacy Policy to reflect changes in
                                    our practices or legal requirements.
                                </p>

                                <p>
                                    We will revise the updated date at the top of the policy
                                    and notify users where appropriate.
                                </p>
                            </PolicySection>
                       
                            <PolicySection number={12} title="Contact Us">
                                <p>
                                    If you have questions or concerns about this Privacy
                                    Policy or our privacy practices, please contact us:
                                </p>

                                <address className="not-italic">
                                    <div className="rounded-xl border border-blue-100 bg-blue-50 p-6 text-center">
                                        <p className="text-lg font-semibold text-[#205090]">
                                            Olympic Park Community Pharmacy
                                        </p>

                                        <div className="mt-4 space-y-2 text-center">
                                            <p>
                                                <span className="font-medium text-gray-900">
                                                    Phone:
                                                </span>{" "}
                                                <a
                                                    href="tel:+14039005553"
                                                    className="text-[#205090] hover:underline"
                                                >
                                                    403 900 5553
                                                </a>
                                            </p>

                                            <p>
                                                <span className="font-medium text-gray-900">
                                                    Email:
                                                </span>{" "}
                                                <a
                                                    href="mailto:admin@olympicparkpharmacy.ca"
                                                    className="break-all text-[#205090] hover:underline"
                                                >
                                                    admin@olympicparkpharmacy.ca
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </address>
                            </PolicySection>
                        </div>

                    </article>
                </div>
            </main>

            <Footer />
        </div>
    </>
  )
}
