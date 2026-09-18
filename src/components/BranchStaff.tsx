import React from 'react';
import { UserCheck, Phone, MessageCircle, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';
import { getWhatsAppUrl } from '../services/whatsappService';
import { useLanguage } from '../context/LanguageContext';

export const BranchStaff: React.FC = () => {
  const { isTamil } = useLanguage();

  const staffTeam = [
    {
      branch: 'Lakshmangudi (Head Office)',
      manager: 'R. Senthilkumar & Valuation Desk',
      role: isTamil ? 'தலைமை தங்க மதிப்பீட்டாளர் & அலுவலர் குழு' : 'Chief Gold Appraiser & HO Team',
      experience: isTamil ? '15+ வருட டெல்டா பகுதி அனுபவம்' : '15+ Years Delta Region Experience',
      tamilGreeting: 'வணக்கம்! லட்சுமண்குடி தலைமை அலுவலகத்திற்கு உங்களை அன்புடன் வரவேற்கிறோம். சுடச்சுட காபி அருந்தி, உங்கள் நகைகளின் உண்மையான மதிப்பை அறியுங்கள்.',
      location: 'Opposite IOB, T V R Main Road',
      whatsapp: '919363639955',
      phone: '+91 93636 39955',
      specialty: isTamil ? 'பெரிய சவரன் நகைகள், கட்டிகள் & உடனடி வங்கி தீர்வு' : 'Large Sovereign Valuations, Gold Bullion & Central Operations'
    },
    {
      branch: 'Kumbakonam Branch',
      manager: 'M. Anand & Appraisals Team',
      role: isTamil ? 'மூத்த கிளை மதிப்பீட்டாளர்' : 'Senior Branch Valuer',
      experience: isTamil ? 'கோவில் நகர பாரம்பரிய நகை நிபுணர்' : 'Temple Town Gold Expert',
      tamilGreeting: 'வணக்கம்! கும்பகோணம் புதிய பேருந்து நிலையம் எதிரில் உள்ள எங்கள் கிளைக்கு வருகை தாருங்கள். எவ்வித சேதார கழிவுமின்றி சரியான மதிப்பு தருகிறோம்.',
      location: 'Near Bus Stand, John Selvaraj Nagar',
      whatsapp: '919363639955',
      phone: '+91 93636 39955',
      specialty: isTamil ? 'பாரம்பரிய நகைகள், அடகு நகை மீட்பு, இலவச ஆலோசனை' : 'Temple Jewellery, Pledged Gold Release, Free Consultation'
    },
    {
      branch: 'Ambattur & Avadi (Chennai)',
      manager: 'K. Parthiban & Metro Team',
      role: isTamil ? 'சென்னை மண்டல அதிகாரிகள்' : 'Chennai Metro Regional Officers',
      experience: isTamil ? 'ஜெர்மன் XRF ஸ்பெக்ட்ரோமீட்டர் சான்றளிக்கப்பட்ட குழு' : 'Certified XRF Spectrometry Team',
      tamilGreeting: 'வணக்கம்! சென்னை அம்பத்தூர் மற்றும் ஆவடி கிளைகளில் பெண்களுக்கான தனி ஏசி அறை மற்றும் வீட்டுக்கே வரும் டோர்ஸ்டெப் சேவை உண்டு.',
      location: 'TI Cycle Rd & CTH Main Rd',
      whatsapp: '919363639955',
      phone: '+91 93636 39955',
      specialty: isTamil ? 'வீட்டுக்கே வரும் மதிப்பீடு, உடனடி IMPS/RTGS' : 'Doorstep Valuation at Home, Instant Digital IMPS/RTGS'
    },
    {
      branch: 'Nagapattinam & Pattukkottai',
      manager: 'S. Rajagopalan & Coastal Team',
      role: isTamil ? 'மூத்த மதிப்பீட்டாளர்கள் & விவசாய தங்க உதவி மையம்' : 'Senior Appraisers & Agricultural Gold Desk',
      experience: isTamil ? '12+ வருட டெல்டா மக்கள் நம்பிக்கை' : '12+ Years Delta Trust',
      tamilGreeting: 'வணக்கம்! நாகப்பட்டினம் மற்றும் பட்டுக்கோட்டை கிளைகளில் விவசாய குடும்பங்களுக்கு உடனடி ரொக்கம் மற்றும் அடகு மீட்பு உதவி உண்டு.',
      location: 'Velipalayam & Manickam Colony',
      whatsapp: '919363639955',
      phone: '+91 93636 39955',
      specialty: isTamil ? 'விவசாய குடும்பங்கள் ஆதரவு, உடனடி ஸ்பாட் செட்டில்மெண்ட்' : 'Farmer & Family Support, Quick Spot Settlement'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FCF9F2] border-b border-[#C89B3C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EB] border border-[#C89B3C]/40 text-xs font-bold text-[#9A711F] mb-3">
            <HeartHandshake className="w-4 h-4 text-[#C89B3C]" />
            <span>{isTamil ? 'நேரடி கிளை மேலாளர்கள்' : 'MEET OUR LOCAL BRANCH TEAMS'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-[#140E0A] tracking-tight">
            {isTamil ? 'உண்மையான மனிதர்கள் • இன்முக உபசரிப்பு • இடைத்தரகர்கள் இல்லை' : 'Real People. Real Care. No Middlemen.'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2">
            {isTamil
              ? 'ஒவ்வொரு அதிஷ்டா கோல்ட் கிளையிலும் உங்கள் பகுதியைச் சேர்ந்த, நன்கு பழகிய மனிதநேயம் கொண்ட அதிகாரிகளே பணிபுரிகின்றனர்.'
              : 'Every Athishta Gold branch is staffed with verified local gold appraisers who live in your community and take pride in transparent, honest service.'}
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {staffTeam.map((member, idx) => {
            const branchWhatsApp = getWhatsAppUrl({
              flow: 'branch_enquiry',
              name: 'Customer',
              mobile: '',
              branch: member.branch,
              notes: isTamil
                ? `வணக்கம் ${member.manager}! தங்க மதிப்பீடு குறித்து தங்களிடம் பேச விரும்புகிறேன்.`
                : `Hello ${member.manager}, I would like to consult with you regarding gold valuation.`
            }, member.whatsapp);

            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#C89B3C]/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#9A711F] bg-[#FAF5EB] px-2.5 py-1 rounded-md border border-[#C89B3C]/30 inline-block mb-1.5">
                        {member.branch}
                      </span>
                      <h3 className="text-lg font-serif font-bold text-[#140E0A]">
                        {member.manager}
                      </h3>
                      <p className="text-xs text-zinc-500 font-medium">
                        {member.role} • {member.experience}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[#FAF5EB] border border-[#C89B3C]/40 flex items-center justify-center text-[#9A711F] shrink-0">
                      <UserCheck className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Tamil Greeting Box */}
                  <div className="p-3.5 bg-[#FAF5EB] rounded-2xl border border-[#C89B3C]/20 text-xs text-[#140E0A] leading-relaxed italic">
                    "{member.tamilGreeting}"
                  </div>

                  {/* Specialty & Location */}
                  <div className="text-xs text-zinc-600 space-y-1.5 pt-1">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#9A711F] shrink-0" />
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{member.specialty}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="pt-5 mt-4 border-t border-zinc-100 grid grid-cols-2 gap-2.5">
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold text-[#140E0A] bg-[#FAF5EB] hover:bg-[#E8D49E] border border-[#C89B3C]/40 text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#9A711F]" />
                    <span>{isTamil ? 'அழைக்க' : 'Call Team'}</span>
                  </a>

                  <a
                    href={branchWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[#198754] hover:bg-[#157347] text-center transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
