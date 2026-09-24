export const business = {
  name: "Aline Andrade Studio19",
  shortName: "Aline Andrade",
  tagline: "Penteados, cor e noivas em Mairiporã",
  phoneDisplay: "(11) 96302-2829",
  phoneWhatsapp: "5511963022829",
  address: "R. Cardoso César, 201 - Mairiporã, SP, 07600-162",
  mapsQuery: "R. Cardoso César, 201, Mairiporã, SP, 07600-162",
  instagram: "@aline_andrade_studio19",
  instagramPenteados: "@aline_andrade_penteados",
  instagramUrl: "https://instagram.com/aline_andrade_studio19",
  bookingUrl: "https://maapp.com.br/studio19",
  rating: 5.0,
  reviewCount: 108,
};

export function whatsappLink(message: string) {
  return `https://wa.me/${business.phoneWhatsapp}?text=${encodeURIComponent(message)}`;
}

export type Service = {
  id: string;
  label: string;
  description: string;
  highlight?: boolean;
};

export const services: Service[] = [
  {
    id: "penteados",
    label: "Penteados",
    description: "Da produção do dia a dia ao penteado de festa — a especialidade da casa.",
    highlight: true,
  },
  {
    id: "noivas",
    label: "Penteados para noivas",
    description: "Prova e produção do grande dia, do teste ao penteado final.",
    highlight: true,
  },
  {
    id: "balayage",
    label: "Balayage",
    description: "Iluminação e degradê natural, personalizados pro seu tom de pele.",
  },
  {
    id: "liso-perfeito",
    label: "Liso perfeito",
    description: "A técnica que virou curso — escova com resultado de salão.",
  },
  {
    id: "corte",
    label: "Corte de cabelo",
    description: "Corte sob medida, do aparado ao redesenho completo.",
  },
  {
    id: "trancas",
    label: "Tranças",
    description: "Trançados do clássico ao boho, pra todas as ocasiões.",
  },
  {
    id: "maquiagem",
    label: "Maquiagem",
    description: "Make profissional pra eventos, ensaios e noivas.",
  },
  {
    id: "infantil",
    label: "Salão infantil",
    description: "Atendimento pensado pras pequenas, com todo o cuidado.",
  },
  {
    id: "depilacao",
    label: "Depilação com cera",
    description: "Depilação completa com cera, em ambiente reservado.",
  },
];

export type Review = {
  quote: string;
  meta?: string;
};

export const reviews: Review[] = [
  {
    quote: "Espaço aconchegante, a Aline é uma ótima profissional, não troco por nada!!!",
  },
  {
    quote: "Um salão de boa qualidade ótimo atendimento é incrível o trabalho da Aline ❤️",
  },
  {
    quote: "Com produtos top que fizeram as ondas durarem o dia todo lindamente 🫶🏼",
  },
];

export type ResultPhoto = {
  src: string;
  alt: string;
};

export const results: ResultPhoto[] = [
  { src: "/media/resultado-01.png", alt: "Penteado semipreso ondulado com mechas em tom mel" },
  { src: "/media/resultado-02.png", alt: "Cabelo liso ruivo cobre, comprimento longo" },
  { src: "/media/resultado-03.png", alt: "Balayage loiro em degradê sobre base castanha" },
  { src: "/media/resultado-04.png", alt: "Ondulado com mechas caramelo sobre base castanha" },
  { src: "/media/resultado-05.png", alt: "Cabelo cacheado com mechas loiras" },
  { src: "/media/resultado-06.png", alt: "Balayage loiro em corte bob ondulado" },
];

export const heroVideos = ["/media/hero-01.gif", "/media/hero-02.gif"];

export const course = {
  name: "Curso Liso Perfeito",
  description:
    "Aline também forma outras profissionais na técnica que é marca registrada do Studio19.",
};
