export const chemistryQuiz = {
  quizzes: {
    'quiz-1': [
      {
        question: 'Among equimolar aqueous solutions at 25 °C, which is expected to show the highest pH?',
        options: ['NH₄Cl', 'Na₂CO₃', 'NaCl', 'CH₃COOH'],
        correct: 1,
        explanation:
          'CO₃²⁻ hydrolyzes to produce OH⁻ (basic salt of weak acid + strong base); NH₄Cl is acidic, NaCl ~neutral, acetic acid is acidic.',
      },
      {
        question: 'The hybridization of the central sulfur atom in SF₄ (see-saw geometry) is _______',
        options: ['sp³', 'sp³d', 'sp³d²', 'dsp²'],
        correct: 1,
        explanation:
          'SF₄ has five electron domains (four bonds + one lone pair) around sulfur → trigonal-bipyramidal electron geometry → sp³d hybridization.',
      },
      {
        question: 'Among ethane, ethene, and ethyne, the shortest carbon–carbon bond length occurs in _______',
        options: ['Ethane (C–C single)', 'Ethene (C=C double)', 'Ethyne (C≡C triple)', 'All are equal'],
        correct: 2,
        explanation: 'Bond order increases from single < double < triple; shorter and stronger bonds with higher order.',
      },
      {
        question: 'Schottky defect in an ionic crystal refers to _______',
        options: [
          'Cation occupying an interstitial site',
          'Stoichiometric pairs of cation and anion vacancies',
          'Only electron F-centers without vacancies',
          'Extra atoms at surface only',
        ],
        correct: 1,
        explanation:
          'Schottky defect preserves charge neutrality via paired Schottky vacancies (missing cation + missing anion in stoichiometric ratio).',
      },
      {
        question: 'In the Arrhenius equation k = A e^(−Ea/RT), increasing temperature at constant Ea typically _______',
        options: ['Decreases k exponentially', 'Increases k because more molecules exceed Ea', 'Makes k independent of collisions', 'Forces A to zero'],
        correct: 1,
        explanation: 'Higher T increases the fraction of collisions with energy ≥ Ea, raising the rate constant k.',
      },
      {
        question: 'For a zero-order reaction with respect to A, the integrated rate law [A] versus time is _______',
        options: ['ln[A] = ln[A]₀ − kt', '[A] = [A]₀ − kt', '1/[A] = 1/[A]₀ + kt', '[A] = [A]₀ e^(−kt)'],
        correct: 1,
        explanation: 'Zero order: rate is constant, so concentration decreases linearly with time: [A] = [A]₀ − kt.',
      },
      {
        question:
          'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH < 0, Le Châtelier predicts that _______ (all else equal) favors more NH₃ at equilibrium',
        options: [
          'Increasing temperature',
          'Decreasing temperature and increasing total pressure (gas moles decrease on forward reaction)',
          'Adding inert gas at constant volume only',
          'Removing H₂',
        ],
        correct: 1,
        explanation:
          'Exothermic forward reaction is favored by lower T; fewer gas moles on product side are favored by higher P (at constant T).',
      },
      {
        question: 'The maximum non-expansion electrical work obtainable from a Galvanic cell under reversible conditions is related to _______',
        options: ['ΔH only', 'ΔG = −nFE_cell', 'Only TΔS', 'ΔU + PΔV only'],
        correct: 1,
        explanation: 'Reversible cell work: w_elec,max = nFE = −ΔG (sign conventions: spontaneous cell ΔG < 0).',
      },
      {
        question:
          'EDTA⁴⁻ acting as a chelating ligand in many metal complexes typically provides up to _______ donor atoms to a single metal center',
        options: ['Two', 'Four', 'Six', 'Eight'],
        correct: 2,
        explanation:
          'EDTA is hexadentate (four carboxylate O + two amine N), forming very stable 1:1 complexes with many M²⁺/M³⁺ ions.',
      },
      {
        question: 'High-spin Fe³⁺ (d⁵) in an octahedral field has _______ unpaired electrons',
        options: ['One', 'Three', 'Five', 'Zero'],
        correct: 2,
        explanation:
          'In weak-field (high-spin) octahedral d⁵, electrons occupy all five d orbitals singly before pairing → five unpaired e⁻.',
      },
      {
        question: 'For the same metal ion and ligands, crystal-field splitting in a tetrahedral complex (Δt) versus octahedral (Δo) scales roughly as _______',
        options: ['Δt ≈ Δo', 'Δt ≈ (4/9)Δo', 'Δt ≈ 2Δo', 'Δt ≈ 9Δo'],
        correct: 1,
        explanation: 'Tetrahedral splitting is smaller than octahedral; commonly Δt ≈ (4/9)Δo for comparable parameters.',
      },
      {
        question: 'Which substrate is typically most reactive toward an S_N2 mechanism?',
        options: [
          'Neopentyl bromide (1° but bulky)',
          'Methyl iodide',
          'Tert-butyl chloride',
          'Vinyl bromide',
        ],
        correct: 1,
        explanation:
          'S_N2 favors unhindered primary (and methyl) centers; tertiary and vinyl halides are poor for S_N2.',
      },
      {
        question: 'Anti-Markovnikov addition of HBr to an alkene is commonly achieved in the presence of _______',
        options: ['AlCl₃', 'Peroxides (radical mechanism)', 'Conc. H₂SO₄', 'Anhydrous ZnCl₂'],
        correct: 1,
        explanation: 'Peroxide initiates a radical chain adding Br· to the less substituted carbon (Kharasch effect).',
      },
      {
        question: 'The electrophile that attacks benzene in nitration is mainly _______',
        options: ['NO₂', 'NO₂⁺ (nitronium ion)', 'HNO₃ alone as π-acid', 'NO'],
        correct: 1,
        explanation:
          'Mixed acid generates NO₂⁺, the active electrophile in electrophilic aromatic substitution (nitronium).',
      },
      {
        question: 'According to Faraday’s laws of electrolysis, the mass m deposited is proportional to _______',
        options: [
          'Only time, independent of current',
          'Q = I·t and equivalent weight (m ∝ It M/(nF))',
          'Square of voltage only',
          'Temperature alone',
        ],
        correct: 1,
        explanation:
          'm = (Q M)/(nF) with Q = I·t; moles of electrons fix the extent of redox.',
      },
      {
        question: 'For an ideal gas at constant temperature, Boyle’s law states _______',
        options: ['P/T constant', 'P ∝ V', 'PV = constant', 'V/T constant'],
        correct: 2,
        explanation: 'At fixed n and T, PV = constant (Boyle).',
      },
      {
        question:
          'Raoult’s law for an ideal binary liquid states that partial vapor pressure of component i is P_i = _______',
        options: ['x_i P°_j (j ≠ i)', 'x_i P°_i', 'P°_i / x_i', '√(x_i) P°_i'],
        correct: 1,
        explanation: 'Ideal solution: p_i = x_i P°_i where x_i is mole fraction and P°_i is vapor pressure of pure i.',
      },
      {
        question: 'Which concentration unit is independent of temperature (neglecting thermal expansion nuance)?',
        options: ['Molarity (mol L⁻¹)', 'Molality (mol kg⁻¹ solvent)', 'Normality of a lab reagent only', 'Volume percent of ethanol always'],
        correct: 1,
        explanation:
          'Molality uses solvent mass; molarity depends on solution volume, which changes with T.',
      },
      {
        question: 'The Pauli exclusion principle requires that _______',
        options: [
          'All electrons in an atom share one set of quantum numbers',
          'No two electrons in an atom can have an identical set of four quantum numbers',
          's orbitals hold six electrons',
          'Spin must always be zero',
        ],
        correct: 1,
        explanation:
          'Each electron in an atom is uniquely labeled by (n, l, m_l, m_s); at most one electron per quantum state.',
      },
      {
        question: 'The ground-state electron configuration of chromium (Cr, Z = 24) is _______',
        options: ['[Ar] 3d⁴ 4s²', '[Ar] 3d⁵ 4s¹', '[Ar] 3d⁶ 4s⁰', '[Ar] 4s¹ 3d⁵ only without order'],
        correct: 1,
        explanation:
          'Cr is an Aufbau exception: half-filled 3d⁵ and one 4s electron lower the energy versus 3d⁴ 4s².',
      },
      {
        question: 'Among HF, HCl, HBr, HI, the strongest hydrogen bonding in the pure liquid is expected in _______',
        options: ['HI', 'HBr', 'HCl', 'HF'],
        correct: 3,
        explanation:
          'F is very electronegative and small → extensive hydrogen bonding in HF; heavier HX have weaker H-bonds.',
      },
      {
        question: 'A buffer made from a weak acid HA and its conjugate base A⁻ has maximum buffer capacity when _______ (for a given total concentration)',
        options: ['pH = 0', 'pH = pK_a (often [HA] ≈ [A⁻])', 'pH = 14', '[HA] ≫ [A⁻] always'],
        correct: 1,
        explanation:
          'Buffer capacity is symmetric and maximal near pH = pK_a where both HA and A⁻ are present substantially.',
      },
      {
        question: 'The spin-only magnetic moment (in Bohr magnetons) for one unpaired electron is _______',
        options: ['0', '√3', '√15', '√35'],
        correct: 1,
        explanation: 'μ_s.o. = √[n(n+2)] BM; n = 1 gives √3 BM.',
      },
      {
        question: 'In VSEPR theory, XeF₄ adopts _______ molecular geometry',
        options: ['Tetrahedral', 'Square planar', 'Trigonal pyramidal', 'T-shaped'],
        correct: 1,
        explanation:
          'XeF₄ has six electron domains (four bonds + two lone pairs on Xe) → octahedral electron geometry → square planar molecular shape.',
      },
      {
        question: 'The conjugate base of H₂PO₄⁻ is _______',
        options: ['H₃PO₄', 'HPO₄²⁻', 'PO₄³⁻', 'P₂O₅'],
        correct: 1,
        explanation: 'Remove one proton from the amphiprotic H₂PO₄⁻ to get HPO₄²⁻.',
      },
    ],
    'quiz-2': [
      {
        question: 'The “gold number” in colloid chemistry refers to _______',
        options: [
          'Atomic weight of gold',
          'Milligrams of protective colloid to prevent coagulation of 10 mL gold sol by 1 mL 10% NaCl (Zsigmondy)',
          'Wavelength of gold nanoparticle plasmon only',
          'Faraday constant for Au³⁺',
        ],
        correct: 1,
        explanation:
          'Smaller gold number → stronger protective power (less mass needed) in classical gold-sol coagulation tests.',
      },
      {
        question: 'Tyndall effect is due to _______',
        options: [
          'Absorption of UV only',
          'Scattering of light by colloidal particles',
          'Refraction only in single crystals',
          'Fluorescence always',
        ],
        correct: 1,
        explanation:
          'Colloids scatter visible light (Tyndall cone); true solutions show negligible scattering.',
      },
      {
        question:
          'According to Hardy–Schulze rule, the coagulating power of ions for a negatively charged colloid generally increases with _______',
        options: [
          'Decreasing cation charge',
          'Increasing charge on the counter-ion (cation)',
          'Only anion size',
          'Only pH of pure water',
        ],
        correct: 1,
        explanation:
          'Higher charge on the oppositely charged ion (“flocculating ion”) compresses the double layer more effectively.',
      },
      {
        question: 'Chemically, Mohr’s salt is _______',
        options: [
          'Fe₂(SO₄)₃',
          'FeSO₄·(NH₄)₂SO₄·6H₂O',
          'KFe(SO₄)₂·12H₂O',
          'Fe(CO)₅',
        ],
        correct: 1,
        explanation:
          'Mohr’s salt is double sulfate of Fe(II) and ammonium; it resists aerial oxidation more than FeSO₄ alone.',
      },
      {
        question: 'The brown-ring test qualitatively detects _______ in aqueous solution',
        options: ['Sulfate', 'Chloride', 'Nitrate', 'Phosphate'],
        correct: 2,
        explanation:
          'Nitrate is reduced at an interface in the presence of Fe(II) and concentrated acid, forming a brown NO complex ring.',
      },
      {
        question: 'Noble gases form compounds most readily with _______ among the following',
        options: ['Helium only at STP', 'Xenon and fluorine/oxygen (high oxidation states)', 'Neon with chlorine readily', 'Argon with gold cluster compounds at 1 bar only'],
        correct: 1,
        explanation:
          'Xe has lower ionization energy and forms fluorides/oxides and complexes; Kr chemistry is rarer; He/Ne are extremely inert.',
      },
      {
        question: 'Zeise’s salt, K[PtCl₃(C₂H₄)]·H₂O, is historically important as an example of _______',
        options: [
          'Pure ionic sodium chloride adduct',
          'A transition-metal π-complex of ethylene',
          'A Grignard reagent',
          'A zeolite framework material',
        ],
        correct: 1,
        explanation:
          'Zeise’s salt contains Pt–ethylene π bonding and helped launch organometallic chemistry.',
      },
      {
        question: 'Wilkinson’s catalyst, RhCl(PPh₃)₃, is widely used for _______',
        options: [
          'Ester hydrolysis only',
          'Homogeneous hydrogenation of alkenes',
          'Molten NaCl electrolysis',
          'Photochemical ozone destruction only',
        ],
        correct: 1,
        explanation:
          'The Rh(I) complex activates H₂ and adds H across C=C under mild conditions (homogeneous catalysis).',
      },
      {
        question: 'Grignard reagents (R–MgX) act as strong nucleophiles toward _______',
        options: [
          'Alkane C–H bonds only',
          'Carbonyl carbons (aldehydes/ketones/esters) forming new C–C bonds after workup',
          'NaCl crystals',
          'Quartz SiO₂ without reaction',
        ],
        correct: 1,
        explanation:
          'Grignards attack polarized C=O; careful solvent choice and exclusion of water are required.',
      },
      {
        question: 'The Cannizzaro reaction is typical for _______',
        options: [
          'Aldehydes without α-hydrogen',
          'Ketones with α-hydrogens',
          'Carboxylic acids and esters only',
          'Terminal alkynes only',
        ],
        correct: 0,
        explanation:
          'Non-enolizable aldehydes undergo disproportionation in strong base (one molecule oxidized, one reduced).',
      },
      {
        question: 'A crossed aldol condensation is favored between _______ under suitable base',
        options: [
          'Two ketones that cannot enolize',
          'One carbonyl with α-H and one without (e.g., benzaldehyde + acetone), often after dehydration',
          'Two benzene rings only',
          'Water and methane',
        ],
        correct: 1,
        explanation:
          'Mixed aldols avoid statistical mixtures when one partner lacks α-H and cannot self-condense.',
      },
      {
        question: 'Reimer–Tiemann reaction converts phenol to _______',
        options: [
          'Para-benzoquinone only',
          'Salicylaldehyde (ortho-formylation) via dichlorocarbene chemistry',
          'Cumene',
          'Aniline',
        ],
        correct: 1,
        explanation:
          'CHCl₃ + strong base generates :CCl₂ that inserts; ortho substitution dominates on the activated phenoxide.',
      },
      {
        question:
          'Friedel–Crafts alkylation of benzene with 1-chloropropane and AlCl₃ may give _______ as a major issue besides polyalkylation',
        options: [
          'Only para product always',
          'Rearranged carbocation leading to isopropylbenzene',
          'No reaction ever',
          'Immediate nitration',
        ],
        correct: 1,
        explanation:
          'Primary alkyl halides can rearrange to more stable carbocations with Lewis acid, complicating regioselectivity.',
      },
      {
        question: 'In benzoic acid, the carboxylate anion is stabilized primarily by _______',
        options: [
          'Only inductive withdrawal of O',
          'Resonance / mesomeric delocalization over the COO⁻ group and ring π-system coupling',
          'Hydrogen bonding only',
          'Metal complexation only',
        ],
        correct: 1,
        explanation: 'Negative charge is delocalized between two oxygen atoms (resonance), lowering energy of the conjugate base.',
      },
      {
        question: 'The common-ion effect on solubility (e.g., NaCl added to saturated AgCl) _______',
        options: [
          'Always increases AgCl solubility',
          'Decreases ionic product up to K_sp, precipitating more solid',
          'Has no effect on equilibrium',
          'Doubles K_sp',
        ],
        correct: 1,
        explanation:
          'Added Cl⁻ shifts AgCl(s) ⇌ Ag⁺ + Cl⁻ left, suppressing solubility (Le Châtelier).',
      },
      {
        question: 'For the cell reaction quotient Q, the Nernst equation at 25 °C is often written E = E° − _______ log₁₀ Q',
        options: ['(0.05916 V/n)', '(0.0257 V/n)', '(RT/n)', '(nF)'],
        correct: 0,
        explanation:
          'At 25 °C, (RT/F)ln Q converts to (0.05916 V/n) log₁₀ Q in base-ten form.',
      },
      {
        question: 'Which is a correct statement about a true catalyst?',
        options: [
          'It is consumed in the overall stoichiometry',
          'It alters the pathway and lowers the apparent activation energy without changing ΔG° of the net reaction',
          'It shifts equilibrium to products only',
          'It supplies heat equal to ΔH always',
        ],
        correct: 1,
        explanation:
          'Catalysts speed both forward and reverse; they do not change thermodynamic endpoints (ΔG°, K).',
      },
      {
        question: 'The enthalpy of atomization of P₄ is referenced to _______',
        options: ['P atoms from white phosphorus molecular P₄', 'P₂ gas only at 0 K', 'Red phosphorus polymer absolute', 'PH₃'],
        correct: 0,
        explanation:
          'Standard data commonly use white phosphorus P₄ as reference for phosphorus thermochemistry.',
      },
      {
        question: 'Borax bead test in qualitative analysis uses borax as a _______',
        options: ['Reducing flux only', 'Glass-forming flux to fuse metal oxides for colored beads', 'Only indicator for pH', 'Source of chlorine'],
        correct: 1,
        explanation:
          'Heated borax forms a borate glass that dissolves oxides; transition-metal ions color the bead.',
      },
      {
        question: 'The stabilizing interaction between soft Lewis acids and soft bases is often explained using _______',
        options: [
          'Only ionic radius ratio rule',
          'HSAB principle (Pearson)—similar polarizability favors covalent character',
          'Ideal gas law',
          'Hund’s rule only',
        ],
        correct: 1,
        explanation:
          'Soft–soft pairings (e.g., Ag⁺ with I⁻) tend to be more covalent; hard–hard favor electrostatic control.',
      },
      {
        question: 'Lanthanide contraction causes _______',
        options: [
          'Increase in atomic radii across the period unchecked',
          'A smaller-than-expected increase in radii from 4d to 5d congeners due to poor shielding by 4f electrons',
          'Identical radii for Zr and Hf',
          'Expansion of actinide 5f orbitals only',
        ],
        correct: 1,
        explanation:
          'Poor 4f shielding increases Z_eff; 5d elements (e.g., Hf) have radii close to 4d analogs (e.g., Zr).',
      },
      {
        question:
          'A first-order reaction has half-life t₁/₂ = 20 min. Starting with [A]₀, after 60 minutes the fraction of A remaining is _______',
        options: ['1/2', '1/4', '1/8', '1/16'],
        correct: 2,
        explanation: '60 min = 3 half-lives → (1/2)³ = 1/8 of initial concentration remains.',
      },
      {
        question: 'Transuranium elements such as neptunium and plutonium are mainly produced by _______',
        options: [
          'Only gravitational fusion in stars delivered to Earth',
          'Neutron capture followed by β-decays in nuclear reactors or bomb detonations',
          'Photosynthesis',
          'Electrolysis of sea water',
        ],
        correct: 1,
        explanation:
          'Sequential n,γ captures and decays build higher Z actinides beyond uranium in engineered settings.',
      },
      {
        question: 'The IUPAC name orientation for the functional group priority in  CH₃CH₂C(=O)OH  is dominated by _______',
        options: ['Alcohol', 'Carboxylic acid', 'Aldehyde', 'Alkene'],
        correct: 1,
        explanation:
          'Carboxylic acids outrank common functional groups; the parent chain includes the –COOH carbon.',
      },
      {
        question: 'A substance that rotates the plane of plane-polarized light is said to be _______',
        options: ['Achiral always', 'Optically active (and requires chiral enantiomers or an excess of one)', 'Meso only', 'Racemic without net rotation'],
        correct: 1,
        explanation:
          'Net optical activity needs an imbalance of enantiomers; racemic mixtures show no rotation.',
      },
    ],
  },
};
