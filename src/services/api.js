const API_BASE_URL = "http://localhost:8000/api";

// Dados estáticos de fallback caso a API do Django esteja offline
const FALLBACK_DATA = {
  info: [
    {
      nome: "Hospital Nossa Senhora do Brasil",
      historia: "Fundado em 1985 na cidade de Bambuí, o Hospital Nossa Senhora do Brasil oferece saúde de qualidade e atendimento humanizado para toda a região.",
      missao: "Oferecer assistência hospitalar de excelência, promovendo a saúde e o bem-estar com humanização, ética e sustentabilidade.",
      visao: "Ser reconhecido como o principal centro hospitalar da região em segurança, inovação e acolhimento.",
      valores: "Humanização, Excelência, Ética, Compromisso Social, Segurança do Paciente e Respeito à Vida.",
      endereco: "Av. Armando Franco, 350 - Centro, Bambuí - MG, 38900-000",
      telefone: "(37) 3431-0000",
      email: "contato@hospital.com.br",
      instagram: "hospitalnsbrasil",
      facebook: "hospitalnsbrasil",
      horario_funcionamento: "Atendimento 24 horas (Pronto Socorro) | Visitas das 14h às 17h"
    }
  ],
  doctors: [
    {
      nome: "Dr. João Silva",
      especialidade: "Clínica Médica",
      crm: "MG 12345",
      biografia: "Dr. João Silva é graduado pela UFMG, com mais de 15 anos de experiência em clínica médica e terapia intensiva.",
      ativo: true
    },
    {
      nome: "Dra. Ana Oliveira",
      especialidade: "Cardiologia",
      crm: "MG 67890",
      biografia: "Dra. Ana Oliveira é especialista em cardiologia pela USP, com foco em cardiologia preventiva.",
      ativo: true
    },
    {
      nome: "Dr. Carlos Souza",
      especialidade: "Pediatria",
      crm: "MG 54321",
      biografia: "Dr. Carlos é apaixonado pelo cuidado infantil. Formado pela UFRJ, tem especialização em pediatria.",
      ativo: true
    }
  ],
  achievements: [
    {
      titulo: "Nova Ala Pediátrica Inaugurada",
      descricao: "Inauguramos nossa nova ala pediátrica equipada com tecnologia de ponta e leitos decorados de forma lúdica.",
      data_realizacao: "2025-10-15"
    },
    {
      titulo: "Aquisição de Tomógrafo de Última Geração",
      descricao: "Com recursos próprios e doações da comunidade, adquirimos um tomógrafo computadorizado multislice.",
      data_realizacao: "2024-06-20"
    }
  ],
  campaigns: [
    {
      titulo: "Campanha de Reforma do Berçário",
      descricao: "Nossa ala de maternidade precisa de novos berços aquecidos, monitores neonatais e reforma estrutural.",
      chave_pix: "pix@hospitalnsbrasil.com.br",
      beneficiario: "Hospital Nossa Senhora do Brasil LTDA",
      ativa: true
    }
  ],
  donationMethods: [
    {
      tipo: "PIX Institucional",
      descricao: "Chave CNPJ: 37.343.100/0001-00",
      instrucoes: "Acesse o app do seu banco, escolha a opção PIX e insira a chave CNPJ do Hospital."
    },
    {
      tipo: "Conta Corrente Bancária",
      descricao: "Banco do Brasil - Agência: 1234-5 | Conta: 98765-4",
      instrucoes: "Para transferências (TED/DOC), utilize os dados acima. Favorecido: Hospital Nossa Senhora do Brasil."
    }
  ]
};

async function fetchFromApi(endpoint, fallbackKey) {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn(`Erro ao consumir a API (${endpoint}). Usando fallback estático.`, error);
    return FALLBACK_DATA[fallbackKey];
  }
}

export async function getHospitalInfo() {
  const data = await fetchFromApi("info/", "info");
  return data && data.length > 0 ? data[0] : FALLBACK_DATA.info[0];
}

export async function getDoctors() {
  return fetchFromApi("doctors/", "doctors");
}

export async function getAchievements() {
  return fetchFromApi("achievements/", "achievements");
}

export async function getDonationCampaigns() {
  return fetchFromApi("campaigns/", "campaigns");
}

export async function getDonationMethods() {
  return fetchFromApi("donation-methods/", "donationMethods");
}

export async function sendContactMessage(data) {
  try {
    const response = await fetch(`${API_BASE_URL}/contacts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || "Falha ao enviar a mensagem. Verifique os dados.");
    }
    
    return await response.json();
  } catch (error) {
    console.error("Erro no envio do formulário de contato:", error);
    throw error;
  }
}
