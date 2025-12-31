
import { Product } from './types';

export const ALL_PRODUCTS: Product[] = [
  // --- DÉCORATION ---
  {
    id: 'dec-001',
    name: 'Assiette décorative Léopard',
    reference: 'DEC-001',
    description: 'Assiette décorative chic motif léopard',
    price: 249,
    image: 'https://images.unsplash.com/photo-1530982255534-5f99238bc74d?auto=format&fit=crop&q=80&w=600',
    category: 'decor'
  },
  {
    id: 'dec-002',
    name: 'Tasse porcelaine dorée',
    reference: 'DEC-002',
    description: 'Tasse élégante finition dorée',
    price: 129,
    image: 'https://images.unsplash.com/photo-1577937927133-66ef06ac992a?auto=format&fit=crop&q=80&w=600',
    category: 'decor'
  },
  {
    id: 'dec-003',
    name: 'Plateau décoratif miroir',
    reference: 'DEC-003',
    description: 'Plateau déco pour salon ou chambre',
    price: 299,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600',
    category: 'decor'
  },
  {
    id: 'dec-004',
    name: 'Coussin rayé noir & blanc',
    reference: 'DEC-004',
    description: 'Coussin design moderne',
    price: 219,
    image: 'https://images.unsplash.com/photo-1584184924103-e310d9dc85fc?auto=format&fit=crop&q=80&w=600',
    category: 'decor'
  },
  {
    id: 'dec-005',
    name: 'Vase céramique nude',
    reference: 'DEC-005',
    description: 'Vase minimaliste couleur nude',
    price: 189,
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=600',
    category: 'decor'
  },
  {
    id: 'dec-006',
    name: 'Bougeoir métal doré',
    reference: 'DEC-006',
    description: 'Bougeoir élégant style luxe',
    price: 159,
    image: 'https://images.unsplash.com/photo-1536920333502-0d990ff53d1c?auto=format&fit=crop&q=80&w=600',
    category: 'decor'
  },
  {
    id: 'dec-007',
    name: 'Cadre décoratif femme',
    reference: 'DEC-007',
    description: 'Illustration féminine artistique',
    price: 199,
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600',
    category: 'decor'
  },
  {
    id: 'dec-008',
    name: 'Boîte déco imprimée',
    reference: 'DEC-008',
    description: 'Boîte rangement décorative',
    price: 169,
    image: 'https://images.unsplash.com/photo-1606146485652-75b352ce408a?auto=format&fit=crop&q=80&w=600',
    category: 'decor'
  },
  {
    id: 'dec-009',
    name: 'Plateau bois & verre',
    reference: 'DEC-009',
    description: 'Plateau chic multi-usage',
    price: 259,
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=600',
    category: 'decor'
  },
  {
    id: 'dec-010',
    name: 'Statue décorative femme',
    reference: 'DEC-010',
    description: 'Sculpture déco féminine',
    price: 349,
    image: 'https://images.unsplash.com/photo-1620619767323-b95a89183081?auto=format&fit=crop&q=80&w=600',
    category: 'decor'
  },
  {
    id: 'dec-011',
    name: 'Plateau déco marbre',
    reference: 'DEC-011',
    description: 'Plateau décoratif effet marbre',
    price: 319,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600',
    category: 'decor'
  },
  {
    id: 'dec-012',
    name: 'Mug design illustration',
    reference: 'DEC-012',
    description: 'Mug illustré chic',
    price: 139,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fbed20?auto=format&fit=crop&q=80&w=600',
    category: 'decor'
  },
  {
    id: 'dec-013',
    name: 'Coussin velours beige',
    reference: 'DEC-013',
    description: 'Coussin velours premium',
    price: 229,
    image: 'https://images.unsplash.com/photo-1579656335362-9c1dc1115d07?auto=format&fit=crop&q=80&w=600',
    category: 'decor'
  },
  {
    id: 'dec-014',
    name: 'Vase verre fumé',
    reference: 'DEC-014',
    description: 'Vase élégant verre fumé',
    price: 209,
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=600',
    category: 'decor'
  },
  {
    id: 'dec-015',
    name: 'Bougeoir céramique',
    reference: 'DEC-015',
    description: 'Bougeoir minimaliste',
    price: 149,
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80&w=600',
    category: 'decor'
  },

  // --- LINGE DE MAISON (Update: Bathrobes & Towels) ---
  {
    id: 'lin-001',
    name: 'Peignoir en coton gaufré',
    reference: 'LIN-001',
    description: 'Peignoir léger et absorbant, style spa hôtelier',
    price: 389,
    image: 'https://images.unsplash.com/photo-1608248543734-7a918e957866?auto=format&fit=crop&q=80&w=600',
    category: 'lingerie'
  },
  {
    id: 'lin-002',
    name: 'Set de serviettes Premium',
    reference: 'LIN-002',
    description: 'Ensemble de 3 serviettes en coton égyptien',
    price: 299,
    image: 'https://images.unsplash.com/photo-1563220455-827d00f2e0ec?auto=format&fit=crop&q=80&w=600',
    category: 'lingerie'
  },
  {
    id: 'lin-003',
    name: 'Peignoir de bain luxueux',
    reference: 'LIN-003',
    description: 'Finition velours pour une douceur incomparable',
    price: 459,
    image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=600',
    category: 'lingerie'
  },
  {
    id: 'lin-004',
    name: 'Gant de toilette bambou',
    reference: 'LIN-004',
    description: 'Accessoire de bain écologique et ultra-doux',
    price: 49,
    image: 'https://images.unsplash.com/photo-1616164242345-207a6859345c?auto=format&fit=crop&q=80&w=600',
    category: 'lingerie'
  },
  {
    id: 'lin-005',
    name: 'Tapis de bain ultra-moelleux',
    reference: 'LIN-005',
    description: 'Absorption maximale et confort sous les pieds',
    price: 189,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600',
    category: 'lingerie'
  },
  {
    id: 'lin-006',
    name: 'Peignoir à capuche',
    reference: 'LIN-006',
    description: 'Coupe classique avec capuche pour plus de confort',
    price: 429,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600',
    category: 'lingerie'
  },
  {
    id: 'lin-007',
    name: 'Parure de serviettes invités',
    reference: 'LIN-007',
    description: 'Duo de petites serviettes raffinées',
    price: 149,
    image: 'https://images.unsplash.com/photo-1527385352018-3c26dd6c38cd?auto=format&fit=crop&q=80&w=600',
    category: 'lingerie'
  },
  {
    id: 'lin-008',
    name: 'Robe de chambre satinée',
    reference: 'LIN-008',
    description: 'Élégance et légèreté pour vos moments de détente',
    price: 349,
    image: 'https://images.unsplash.com/photo-1582533081016-09590218ab2b?auto=format&fit=crop&q=80&w=600',
    category: 'lingerie'
  },
  {
    id: 'lin-009',
    name: 'Drap de douche brodé',
    reference: 'LIN-009',
    description: 'Grande serviette avec détails brodés main',
    price: 269,
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=600',
    category: 'lingerie'
  },
  {
    id: 'lin-010',
    name: 'Kimono d\'intérieur léger',
    reference: 'LIN-010',
    description: 'Inspiré des rituels de beauté orientaux',
    price: 499,
    image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=600',
    category: 'lingerie'
  },

  // --- BOUGIES ---
  {
    id: 'can-001',
    name: 'Bougie parfumée Vanille',
    reference: 'CAN-001',
    description: 'Bougie parfum vanille douce',
    price: 179,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=600',
    category: 'candles'
  },
  {
    id: 'can-002',
    name: 'Bougie parfumée Ambre',
    reference: 'CAN-002',
    description: 'Bougie senteur ambre chaud',
    price: 189,
    image: 'https://images.unsplash.com/photo-1602872030219-cbf9d79e2716?auto=format&fit=crop&q=80&w=600',
    category: 'candles'
  },
  {
    id: 'can-003',
    name: 'Bougie parfumée Rose',
    reference: 'CAN-003',
    description: 'Bougie florale rose',
    price: 169,
    image: 'https://images.unsplash.com/photo-1554033853-bc97e1781297?auto=format&fit=crop&q=80&w=600',
    category: 'candles'
  },
  {
    id: 'can-004',
    name: 'Bougie parfumée Bois',
    reference: 'CAN-004',
    description: 'Bougie boisée élégante',
    price: 199,
    image: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?auto=format&fit=crop&q=80&w=600',
    category: 'candles'
  },
  {
    id: 'can-005',
    name: 'Bougie luxe verre noir',
    reference: 'CAN-005',
    description: 'Bougie premium verre noir',
    price: 249,
    image: 'https://images.unsplash.com/photo-1536920333502-0d990ff53d1c?auto=format&fit=crop&q=80&w=600',
    category: 'candles'
  },
  {
    id: 'can-006',
    name: 'Bougie parfumée Jasmin',
    reference: 'CAN-006',
    description: 'Bougie florale jasmin',
    price: 179,
    image: 'https://images.unsplash.com/photo-1514328525431-eac296c01d82?auto=format&fit=crop&q=80&w=600',
    category: 'candles'
  },
  {
    id: 'can-007',
    name: 'Bougie parfumée Musc',
    reference: 'CAN-007',
    description: 'Bougie musquée élégante',
    price: 189,
    image: 'https://images.unsplash.com/photo-1603006373111-d0b64d1f506b?auto=format&fit=crop&q=80&w=600',
    category: 'candles'
  },
  {
    id: 'can-008',
    name: 'Bougie parfumée Figue',
    reference: 'CAN-008',
    description: 'Bougie senteur figue',
    price: 199,
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80&w=600',
    category: 'candles'
  },
  {
    id: 'can-009',
    name: 'Bougie artisanale naturelle',
    reference: 'CAN-009',
    description: 'Bougie cire naturelle',
    price: 229,
    image: 'https://images.unsplash.com/photo-1596433809252-260c2745dfdd?auto=format&fit=crop&q=80&w=600',
    category: 'candles'
  },
  {
    id: 'can-010',
    name: 'Bougie coffret cadeau',
    reference: 'CAN-010',
    description: 'Coffret bougies cadeau',
    price: 299,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=600',
    category: 'candles'
  }
];
