import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, IndianRupee, RefreshCw, TrendingUp } from 'lucide-react';

const programMap: Record<string, { title: string; duration: string; department: string; slug: string }[]> = {
  engineering: [
    { title: "B.Tech Computer Science Engineering", duration: "4 Years", department: "Engineering", slug: "btech-cse" },
    { title: "B.Tech Artificial Intelligence", duration: "4 Years", department: "Engineering", slug: "btech-ai" },
    { title: "B.Tech Electronics & Communication", duration: "4 Years", department: "Engineering", slug: "btech-ece" },
    { title: "B.Tech Mechanical Engineering", duration: "4 Years", department: "Engineering", slug: "btech-me" },
    { title: "B.Tech Civil Engineering", duration: "4 Years", department: "Engineering", slug: "btech-civil" },
  ],
  management: [
    { title: "MBA", duration: "2 Years", department: "Business Studies", slug: "mba" },
    { title: "BBA", duration: "3 Years", department: "Business Studies", slug: "bba" },
    { title: "B.Com Honours", duration: "3 Years", department: "Business Studies", slug: "bcom" },
  ],
  pharmacy: [
    { title: "B.Pharm", duration: "4 Years", department: "Pharmacy", slug: "bpharm" },
    { title: "Pharm.D", duration: "6 Years", department: "Pharmacy", slug: "pharmd" },
    { title: "M.Pharm", duration: "2 Years", department: "Pharmacy", slug: "mpharm" },
  ],
  computer: [
    { title: "BCA", duration: "3 Years", department: "Computer Applications", slug: "bca" },
    { title: "MCA", duration: "2 Years", department: "Computer Applications", slug: "mca" },
    { title: "B.Sc Information Technology", duration: "3 Years", department: "Computer Applications", slug: "bsc-it" },
  ],
  hospitality: [
    { title: "BHMCT", duration: "4 Years", department: "Hotel Management", slug: "bhmct" },
    { title: "B.Voc in Hospitality", duration: "3 Years", department: "Hotel Management", slug: "bvoc-hospitality" },
  ],
  law: [
    { title: "Bachelor of Law (LLB)", duration: "3 Years", department: "Law", slug: "llb" },
    { title: "BA + LLB", duration: "5 Years", department: "Law", slug: "ba-llb" },
  ],
  education: [
    { title: "B.Ed", duration: "2 Years", department: "Education", slug: "bed" },
    { title: "B.A.", duration: "3 Years", department: "Arts", slug: "ba" },
  ],
  paramedical: [
    { title: "B.Sc Physiotherapy", duration: "4.5 Years", department: "Paramedical", slug: "bsc-physiotherapy" },
    { title: "B.Sc Medical Laboratory Science", duration: "4 Years", department: "Paramedical", slug: "bsc-mls" },
    { title: "B.Sc Radio Imaging Technology", duration: "4 Years", department: "Paramedical", slug: "bsc-rit" },
  ],
};

export interface UserSelections {
  interest?: string;
  career?: string;
  academicPreference?: string;
  location?: string;
  budget?: string;
}

export interface ProgramRecommendation {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  durationMonths: number;
  tuitionCents: number;
}

type DisplayRecommendation = ProgramRecommendation & {
  duration?: string;
  department?: string;
};

interface ResultsProps {
  selections: UserSelections;
  recommendations: ProgramRecommendation[];
  onRestart: () => void;
}

function formatTuitionFromCents(tuitionCents: number) {
  const rupees = Math.round(tuitionCents / 100);
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(rupees);
}

function formatDuration(durationMonths: number) {
  const years = Math.floor(durationMonths / 12);
  const months = durationMonths % 12;

  if (years > 0 && months > 0) {
    return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
  }

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''}`;
  }

  return `${durationMonths} months`;
}

export function Results({ selections, recommendations, onRestart }: ResultsProps) {
  const fallbackRecommendations: DisplayRecommendation[] = (programMap[selections.interest ?? ""] ?? []).map((program, index) => ({
    id: `${program.slug}-${index}`,
    slug: program.slug,
    title: program.title,
    shortDescription: `${program.department} program at SVIET`,
    durationMonths: 0,
    tuitionCents: 0,
    duration: program.duration,
    department: program.department,
  }));

  const displayRecommendations: DisplayRecommendation[] = recommendations.length > 0 ? recommendations : fallbackRecommendations;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-gray-50">
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/30 mb-6">
              <TrendingUp className="w-4 h-4 text-[#FF6A00]" />
              <span className="text-sm text-[#FF6A00] font-medium">Results Ready</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-light mb-4 text-gray-900">Your Recommended Programs</h1>
            <p className="text-sm text-gray-600 max-w-2xl">
              Based on your selections, we&apos;ve found {displayRecommendations.length} programs that match your goals.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 p-6 rounded-2xl bg-[#FF6A00]/5 border border-[#FF6A00]/20"
        >
          <h3 className="text-sm font-medium text-[#FF6A00] mb-2">WHY THESE PROGRAMS?</h3>
          <p className="text-gray-700">
            Based on your interest in{' '}
            <span className="text-[#FF6A00] font-medium capitalize">{selections.interest ?? 'your selected field'}</span>{' '}
            and career goals, these recommendations offer the best fit.
          </p>
        </motion.div>

        {displayRecommendations.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center text-gray-600">
            No recommendations are available right now. Please try again.
          </div>
        ) : (
          <div className="space-y-6">
            {displayRecommendations.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#FF6A00]/50 transition-all hover:shadow-lg"
              >
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-sm text-gray-600">{program.shortDescription}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#FF6A00] shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="font-medium text-gray-900">{program.duration ?? formatDuration(program.durationMonths)}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <IndianRupee className="w-5 h-5 text-[#FF6A00] shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-gray-600">Fees</p>
                        <p className="font-medium text-gray-900">{program.tuitionCents > 0 ? formatTuitionFromCents(program.tuitionCents) : 'Contact Admissions'}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/admissions"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF6A00] px-6 py-3 text-sm font-medium text-white transition-all shadow-lg hover:bg-[#E55A00] hover:shadow-xl"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={onRestart}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-gray-200 font-medium text-gray-900 hover:border-[#FF6A00] hover:text-[#FF6A00] transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            Start Over
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
