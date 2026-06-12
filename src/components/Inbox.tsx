import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, Star, Trash2, ShieldAlert, Sparkles, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface VisitorMessage {
  id: string;
  name: string;
  email: string;
  role: string;
  message: string;
  date: string;
  isStarred?: boolean;
}

const INITIAL_MESSAGES: VisitorMessage[] = [
  {
    id: "init1",
    name: "Aravind Sharma",
    email: "aravind.sharma@talenttech.recruiting",
    role: "Senior Recruiter",
    message: "Stunned by your automated ledger validation suites using Cucumber Genie at Standard Chartered! We have a senior Java Full Stack role in Bengaluru open—would love to chat about your Spring Boot background next week.",
    date: "June 10, 2026",
    isStarred: true
  },
  {
    id: "init2",
    name: "Hitesh Mehta",
    email: "hitesh.mehta@fintech-ventures.co",
    role: "Engineering Lead",
    message: "The rapid transaction factory setup and corneal matching REST web service look exceptionally clean. Your SQL database validation metrics are top-tier. Let's schedule a virtual meeting soon!",
    date: "June 11, 2026",
    isStarred: true
  }
];

export default function Inbox() {
  const [messages, setMessages] = useState<VisitorMessage[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Recruiter');
  const [messageText, setMessageText] = useState('');
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Load from local storage
  useEffect(() => {
    const stored = localStorage.getItem('sravya_portfolio_messages');
    if (stored) {
      try {
        setMessages(JSON.parse(stored));
      } catch (e) {
        setMessages(INITIAL_MESSAGES);
      }
    } else {
      setMessages(INITIAL_MESSAGES);
      localStorage.setItem('sravya_portfolio_messages', JSON.stringify(INITIAL_MESSAGES));
    }
  }, []);

  const saveMessages = (updated: VisitorMessage[]) => {
    setMessages(updated);
    localStorage.setItem('sravya_portfolio_messages', JSON.stringify(updated));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !messageText.trim()) {
      setStatusMsg({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    const newMessage: VisitorMessage = {
      id: `msg-${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      role: role,
      message: messageText.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      isStarred: false
    };

    const updated = [newMessage, ...messages];
    saveMessages(updated);

    // Reset fields
    setName('');
    setEmail('');
    setRole('Recruiter');
    setMessageText('');
    setStatusMsg({ type: 'success', text: "Your message was successfully added to Sravya's board!" });

    setTimeout(() => setStatusMsg(null), 4000);
  };

  const handleToggleStar = (id: string) => {
    const updated = messages.map(msg => 
      msg.id === id ? { ...msg, isStarred: !msg.isStarred } : msg
    );
    saveMessages(updated);
  };

  const handleDelete = (id: string) => {
    const updated = messages.filter(msg => msg.id !== id);
    saveMessages(updated);
  };

  return (
    <section id="contact" className="w-full bg-white px-6 py-20 md:px-12 md:py-28 border-t border-zinc-100">
      <div className="mx-auto w-full max-w-7xl">
        
        {/* Title */}
        <div className="mb-14 max-w-xl">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Collaboration Space</span>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-black">
            Leave Sravya a Message
          </h2>
          <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
            Interested in hiring, collaboration, or sharing technical advice? Drop your words on this active digital blackboard. It will be stored instantly in local state.
          </p>
        </div>

        {/* Layout Column Splitting */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          
          {/* Left Column: Message input board (takes 2 cols) */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="flex items-center space-x-2 font-display text-sm font-semibold uppercase tracking-wider text-black mb-6">
                <Send className="h-4 w-4" />
                <span>Write to Board</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-zinc-500">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g. Elon Musk"
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-xs text-black focus:border-black focus:bg-white focus:outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-zinc-500">Direct Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E.g. elon@spacex.com"
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-xs text-black focus:border-black focus:bg-white focus:outline-none transition-all"
                  />
                </div>

                {/* Role dropdown */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-zinc-500">Your Identity Role</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-xs text-black focus:border-black focus:bg-white focus:outline-none transition-all"
                  >
                    <option value="Recruiter">Technical Recruiter</option>
                    <option value="Hiring Manager">Engineering Director / Lead</option>
                    <option value="Research Developer">AI Research Colleague</option>
                    <option value="Guest">External Reviewer / Guest</option>
                  </select>
                </div>

                {/* Message block */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-zinc-500">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type comments, offers, or greetings..."
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-xs text-black focus:border-black focus:bg-white focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Notification */}
                {statusMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-xl p-3 text-xs font-medium ${
                      statusMsg.type === 'success' 
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-150' 
                        : 'bg-rose-50 text-rose-800 border border-rose-150'
                    }`}
                  >
                    {statusMsg.text}
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full rounded-full bg-black py-3 text-xs font-semibold text-white transition-opacity hover:opacity-95"
                >
                  Post Message to Live Logger
                </motion.button>
              </form>
            </div>
          </div>

          {/* Right Column: Live Message Feed logger (takes 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center space-x-2 font-display text-xs font-bold uppercase tracking-widest text-zinc-400">
                <MessageSquare className="h-4 w-4" />
                <span>Live Guestboard Logger ({messages.length})</span>
              </h3>
              
              <span className="font-mono text-[9px] text-zinc-400">Updates live in localStorage</span>
            </div>

            <div className="space-y-3.5 max-h-[500px] overflow-y-auto pr-2">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="rounded-3xl border border-zinc-200 bg-zinc-50/20 p-5.5 space-y-3.5 hover:border-zinc-300 transition-colors"
                  >
                    {/* Message metadata top row */}
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-display text-sm font-bold text-black">{msg.name}</span>
                          <span className="rounded-full bg-zinc-150 px-2 py-0.5 font-mono text-[8px] font-bold text-zinc-500 uppercase">
                            {msg.role}
                          </span>
                        </div>
                        <a href={`mailto:${msg.email}`} className="text-[11px] text-zinc-400 hover:underline">
                          {msg.email}
                        </a>
                      </div>

                      <div className="flex items-center space-x-1.5">
                        {/* Star toggler */}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleToggleStar(msg.id)}
                          className={`p-1.5 rounded-full transition-colors ${
                            msg.isStarred ? 'text-amber-500 hover:bg-amber-50' : 'text-zinc-300 hover:text-black hover:bg-zinc-100'
                          }`}
                        >
                          <Star className="h-3.5 w-3.5 fill-current" />
                        </motion.button>

                        {/* Delete button (except for predefined initial ones to preserve visual sanity easily if they want) */}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleDelete(msg.id)}
                          className="p-1.5 rounded-full text-zinc-300 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Actual Text body */}
                    <p className="text-xs leading-relaxed text-zinc-600 font-sans sm:text-sm">
                      "{msg.message}"
                    </p>

                    {/* Date stamp footer */}
                    <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono pt-2 border-t border-zinc-100">
                      <span>Posted Successfully</span>
                      <span>{msg.date}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
