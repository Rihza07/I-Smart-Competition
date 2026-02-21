"use client";

import { useState } from "react";

interface Participant {
  name: string;
  kelas: string;
}

export default function RegistrationForm() {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    school: "",
    province: "",
    competition: "",
    leaderName: "",
  });

  const competitions = [
    {
      category: "Ilmu Pengetahuan & Sains",
      items: [
        {
          value: "os_matematika",
          label: "Olimpiade Sains Matematika",
          maxMembers: 1,
        },
        {
          value: "os_ipa",
          label: "Olimpiade Sains IPA Terpadu",
          maxMembers: 1,
        },
        {
          value: "os_ips",
          label: "Olimpiade Sains IPS Terpadu",
          maxMembers: 1,
        },
        {
          value: "lct_matematika",
          label: "Lomba Cepat Tepat Matematika",
          maxMembers: 3,
        },
        {
          value: "lct_ipa",
          label: "Lomba Cepat Tepat IPA Terpadu",
          maxMembers: 3,
        },
        {
          value: "lct_ips",
          label: "Lomba Cepat Tepat IPS Terpadu",
          maxMembers: 3,
        },
        {
          value: "sang_juara",
          label: "Sang Juara",
          maxMembers: 1,
        },
      ],
    },
    {
      category: "Bahasa & Sastra",
      items: [
        {
          value: "debat_bindo",
          label: "Debat Bahasa Indonesia",
          maxMembers: 1,
        },
        { value: "debat_bing", label: "Debat Bahasa Inggris", maxMembers: 1 },
        { value: "pidato_3_bahasa", label: "Pidato 3 Bahasa", maxMembers: 1 },
        { value: "story_telling", label: "Story Telling", maxMembers: 1 },
      ],
    },
    {
      category: "Seni & Jurnalistik",
      items: [
        { value: "short_movie", label: "Short Movie", maxMembers: 1 },
        { value: "desain_poster", label: "Desain Poster", maxMembers: 1 },
        { value: "song_cover", label: "Song Cover", maxMembers: 1 },
        { value: "tari_kolaborasi", label: "Tari Kolaborasi", maxMembers: 1 },
      ],
    },
    {
      category: "Special Competition",
      items: [{ value: "catur", label: "Catur", maxMembers: 1 }],
    },
  ];

  const [participants, setParticipants] = useState<Participant[]>([
    { name: "", kelas: "" },
  ]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleParticipantChange = (
    index: number,
    field: keyof Participant,
    value: string,
  ) => {
    const updated = [...participants];
    updated[index][field] = value;
    setParticipants(updated);
  };

  const validateForm = () => {
    if (!form.email || !form.phone || !form.school) {
      return "Semua data utama harus diisi.";
    }

    if (!form.competition) {
      return "Pilih cabang lomba.";
    }

    if (participants.some((p) => !p.name || !p.kelas)) {
      return "Semua data anggota harus lengkap.";
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const error = validateForm();
    if (error) {
      setMessage(error);
      return;
    }

    setLoading(true);

    // simulasi kirim data
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setMessage("Pendaftaran berhasil dikirim!");
  };
  const handleCompetitionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    let selectedCompetition = null;

    for (const group of competitions) {
      const found = group.items.find((item) => item.value === selectedValue);
      if (found) {
        selectedCompetition = found;
        break;
      }
    }

    setForm({ ...form, competition: selectedValue });

    if (selectedCompetition) {
      const newParticipants = Array.from(
        { length: selectedCompetition.maxMembers },
        () => ({ name: "", kelas: "" }),
      );

      setParticipants(newParticipants);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h3>Data Tim</h3>

      <input
        type="text"
        name="leaderName"
        placeholder="Nama Ketua Tim"
        value={form.leaderName}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="No Telpon"
        value={form.phone}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="school"
        placeholder="Nama Sekolah"
        value={form.school}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="province"
        placeholder="Provinsi"
        value={form.province}
        onChange={handleChange}
        required
      />

      <div className="select-wrapper">
        <select
          name="competition"
          value={form.competition}
          onChange={handleCompetitionChange}
          className="form-input"
          required
        >
          <option value="">Pilih Cabang Lomba</option>

          {competitions.map((group) => (
            <optgroup key={group.category} label={group.category}>
              {group.items.map((comp) => (
                <option key={comp.value} value={comp.value}>
                  {comp.label}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <h3 style={{ marginTop: "20px" }}>Anggota Tim</h3>

      {participants.map((p, index) => (
        <div
          key={index}
          style={{
            marginBottom: "10px",
            borderBottom: "2px solid #777",
            paddingBottom: "30px",
          }}
        >
          <input
            type="text"
            placeholder={`Nama Anggota ${index + 1}`}
            value={p.name}
            onChange={(e) =>
              handleParticipantChange(index, "name", e.target.value)
            }
            required
          />
          <div className="select-wrapper">
            <select
              className="form-input"
              value={p.kelas}
              onChange={(e) =>
                handleParticipantChange(index, "kelas", e.target.value)
              }
              required
            >
              <option value="" className="placeholder">
                Pilih Kelas
              </option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>
        </div>
      ))}

      <button
        type="submit"
        className="btn"
        disabled={loading}
        style={{ marginTop: "20px", opacity: loading ? 0.7 : 1 }}
      >
        {loading ? "Mengirim..." : "Kirim Pendaftaran"}
      </button>

      {message && (
        <p style={{ marginTop: "15px", color: "#c084fc" }}>{message}</p>
      )}
    </form>
  );
}
