import { motion } from 'framer-motion';
import { TrendingUp, Clock, Award, RefreshCw, Mail } from 'lucide-react';
import { useState } from 'react';

export interface UserSelections {
  interest?: string;
  career?: string;
  academicPreference?: string;
  location?: string;
  budget?: string;
}

interface Program {
  id: string;
  name: string;
  duration: string;
  placement: string;
  highlights: string[];
  matchScore: number;
  matchReason: string;
}

// SVIET Program recommendations based on selections
function getRecommendedPrograms(selections: UserSelections): Program[] {
  const { interest } = selections;

  const programMap: Record<string, Program[]> = {
    engineering: [
      {
        id: '1',
        name: 'BTECH CSE',
        duration: '4 years',
        placement: '94% placement',
        highlights: ['AI/ML focus', 'Industry partnerships', 'Modern labs'],
        matchScore: 98,
        matchReason: 'Perfect for software development with hands-on experience',
      },
      {
        id: '2',
        name: 'BTECH ECE',
        duration: '4 years',
        placement: '92% placement',
        highlights: ['Electronics focus', 'Research labs', 'Industry internships'],
        matchScore: 95,
        matchReason: 'Ideal for electronics and communication engineering',
      },
      {
        id: '3',
        name: 'BCA',
        duration: '3 years',
        placement: '90% placement',
        highlights: ['Web development', 'Database systems', 'Secure coding'],
        matchScore: 92,
        matchReason: 'Great foundation for software engineering careers',
      },
    ],
    business: [
      {
        id: '4',
        name: 'BBA',
        duration: '3 years',
        placement: '88% placement',
        highlights: ['Business management', 'Entrepreneurship', 'Corporate internships'],
        matchScore: 96,
        matchReason: 'Strong foundation for management and business careers',
      },
      {
        id: '5',
        name: 'MBA',
        duration: '2 years',
        placement: '91% placement',
        highlights: ['Leadership training', 'Strategic planning', 'Global exposure'],
        matchScore: 94,
        matchReason: 'Advanced degree for executive and entrepreneur roles',
      },
      {
        id: '6',
        name: 'HM',
        duration: '4 years',
        placement: '85% placement',
        highlights: ['Hotel management', 'Event planning', 'Customer service'],
        matchScore: 88,
        matchReason: 'Specialized in hospitality and service management',
      },
    ],
    design: [
      {
        id: '7',
        name: 'HM',
        duration: '4 years',
        placement: '85% placement',
        highlights: ['Design thinking', 'Event management', 'Creative projects'],
        matchScore: 93,
        matchReason: 'Combines design with creative project management',
      },
      {
        id: '8',
        name: 'BCA',
        duration: '3 years',
        placement: '90% placement',
        highlights: ['UI/UX design', 'Digital design', 'Web development'],
        matchScore: 90,
        matchReason: 'Digital design and creative tech integration',
      },
    ],
    science: [
      {
        id: '9',
        name: 'PHARMACY',
        duration: '4 years',
        placement: '89% placement',
        highlights: ['Pharmacy practice', 'Research focus', 'Clinical exposure'],
        matchScore: 96,
        matchReason: 'Comprehensive pharmacy and healthcare science studies',
      },
      {
        id: '10',
        name: 'AGRICULTURE',
        duration: '4 years',
        placement: '87% placement',
        highlights: ['Sustainable farming', 'Modern techniques', 'Research labs'],
        matchScore: 93,
        matchReason: 'Advanced agricultural science and technology',
      },
      {
        id: '11',
        name: 'MCA',
        duration: '2 years',
        placement: '92% placement',
        highlights: ['Advanced computing', 'Data science', 'Research path'],
        matchScore: 91,
        matchReason: 'Advanced computer applications and research',
      },
    ],
    healthcare: [
      {
        id: '12',
        name: 'PHARMACY',
        duration: '4 years',
        placement: '89% placement',
        highlights: ['Clinical pharmacy', 'Healthcare tech', 'Research'],
        matchScore: 97,
        matchReason: 'Perfect for healthcare and pharmaceutical careers',
      },
      {
        id: '13',
        name: 'PARAMEDICAL',
        duration: '3 years',
        placement: '86% placement',
        highlights: ['Medical technology', 'Patient care', 'Lab work'],
        matchScore: 94,
        matchReason: 'Ideal for paramedical and healthcare support roles',
      },
    ],
    agriculture: [
      {
        id: '14',
        name: 'AGRICULTURE',
        duration: '4 years',
        placement: '87% placement',
        highlights: ['Modern farming', 'Technology integration', 'Sustainability'],
        matchScore: 97,
        matchReason: 'Complete agricultural science with modern techniques',
      },
      {
        id: '15',
        name: 'BTECH ECE',
        duration: '4 years',
        placement: '92% placement',
        highlights: ['Agricultural IoT', 'Modern systems', 'Tech integration'],
        matchScore: 88,
        matchReason: 'Agriculture technology and innovation',
      },
    ],
  };

  const programs = programMap[interest || 'engineering'] || programMap.engineering;
  return programs.slice(0, 3);
}

interface ResultsProps {
  selections: UserSelections;
  onRestart: () => void;
}

export function Results({ selections, onRestart }: ResultsProps) {
  const [showContactForm, setShowContactForm] = useState(false);
  const programs = getRecommendedPrograms(selections);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-gray-50">
      {/* Header */}
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
              Based on your selections, we&apos;ve found {programs.length} programs that perfectly match your goals
            </p>
          </motion.div>
        </div>
      </div>

      {/* Programs */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Why these programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 p-6 rounded-2xl bg-[#FF6A00]/5 border border-[#FF6A00]/20"
        >
          <h3 className="text-sm font-medium text-[#FF6A00] mb-2">WHY THESE PROGRAMS?</h3>
          <p className="text-gray-700">
            Based on your interest in <span className="text-[#FF6A00] font-medium capitalize">{selections.interest}</span> and
            career goals, these programs offer the best combination of curriculum and outcomes.
          </p>
        </motion.div>

        <div className="space-y-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#FF6A00]/50 transition-all hover:shadow-lg"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{program.name}</h3>
                    <p className="text-sm text-gray-600">{program.matchReason}</p>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="shrink-0 flex items-center justify-center"
                  >
                    <div className="relative">
                      <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#FF6A00"
                          strokeWidth="3"
                          strokeDasharray={`${2 * Math.PI * 45}`}
                          strokeDashoffset={`${2 * Math.PI * 45 * (1 - program.matchScore / 100)}`}
                          initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                          animate={{
                            strokeDashoffset: 2 * Math.PI * 45 * (1 - program.matchScore / 100),
                          }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-[#FF6A00]">{program.matchScore}%</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#FF6A00] shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-medium text-gray-900">{program.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#FF6A00] shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Placements</p>
                      <p className="font-medium text-gray-900">{program.placement}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-[#FF6A00] shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Match Score</p>
                      <p className="font-medium text-gray-900">{program.matchScore}% Match</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Program Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex px-4 py-2 rounded-full bg-[#FF6A00]/10 text-[#FF6A00] text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={onRestart}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-gray-200 font-medium text-gray-900 hover:border-[#FF6A00] hover:text-[#FF6A00] transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            Start Over
          </button>
          <button
            onClick={() => setShowContactForm(true)}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#FF6A00] text-white font-medium hover:bg-[#E55A00] transition-all shadow-lg hover:shadow-xl"
          >
            <Mail className="w-4 h-4" />
            Get Details by Email
          </button>
        </motion.div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
            >
              <h3 className="text-lg font-medium mb-4 text-gray-900">Send Details to Email</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#FF6A00] focus:outline-none"
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-200 font-medium text-gray-900 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 rounded-lg bg-[#FF6A00] text-white font-medium hover:bg-[#E55A00]"
                  >
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
