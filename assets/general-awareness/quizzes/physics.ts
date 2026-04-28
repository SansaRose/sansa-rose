export const physicsQuiz = {
  quizzes: {
    'quiz-1': [
      {
        question:
          'For a planet of mass M and radius R, escape speed from the surface is proportional to:',
        options: ['M/R', '√(𝑀/𝑅)', '𝑀𝑅', '1/√𝑅 only'],
        correct: 1,
        explanation:
          '𝑣ₑ = √(2𝐺𝑀/𝑅), so escape speed scales as √(𝑀/𝑅) for a given 𝐺.',
      },
      {
        question:
          'In a Carnot engine operating between absolute temperatures 𝑇ₕ (hot) and 𝑇𝒸 (cold), the maximum efficiency is:',
        options: ['(𝑇ₕ−𝑇𝒸)/𝑇𝒸', '(𝑇ₕ−𝑇𝒸)/𝑇ₕ', '1−𝑇𝒸/𝑇ₕ', '𝑇𝒸/𝑇ₕ'],
        correct: 2,
        explanation:
          'Carnot efficiency 𝜂 = 1 − 𝑇𝒸/𝑇ₕ (temperatures in kelvin).',
      },
      {
        question:
          'The rms speed of molecules of an ideal gas is proportional to:',
        options: ['𝑇', '√𝑇', '1/𝑇', '𝑇²'],
        correct: 1,
        explanation:
          '𝑣ᵣₘₛ = √(3𝑘𝐵𝑇/𝑚) ∝ √𝑇 for a given species.',
      },
      {
        question:
          'In Young’s double-slit experiment, fringe width (separation between adjacent bright fringes) is proportional to:',
        options: ['𝜆/𝐷', '𝐷/𝑑', '𝜆𝐷/𝑑', '𝑑/𝜆'],
        correct: 2,
        explanation:
          '𝛽 = 𝜆𝐷/𝑑 with slit separation 𝑑 and screen distance 𝐷.',
      },
      {
        question:
          'In the photoelectric effect, the threshold frequency for emission depends mainly on:',
        options: ['Intensity of incident light', 'Work function of the metal', 'Speed of incident photons only', 'Polarization of light only'],
        correct: 1,
        explanation:
          '𝜈₀ = 𝜑/ℎ — fixed by the surface material’s work function 𝜑, not by intensity.',
      },
      {
        question:
          'An ideal step-up transformer increases voltage by relying on:',
        options: [
          'Rectification of DC input',
          'Time-varying flux linking primary and secondary coils',
          'Seebeck effect in the core',
          'Hall effect in windings',
        ],
        correct: 1,
        explanation:
          'Mutual induction requires changing magnetic flux (AC); turns ratio sets voltage ratio.',
      },
      {
        question:
          'Lenz’s law is a consequence of conservation of:',
        options: ['Linear momentum', 'Charge', 'Energy (through opposition to flux change)', 'Mass'],
        correct: 2,
        explanation:
          'Induced currents oppose the change that creates them, ensuring net work/energy books balance.',
      },
      {
        question:
          'For a long straight current-carrying wire, magnetic field magnitude at perpendicular distance 𝑟 varies as:',
        options: ['𝑟', '1/𝑟', '1/𝑟²', '𝑟²'],
        correct: 1,
        explanation:
          '𝐵 = 𝜇₀𝐼/(2𝜋𝑟) from Ampère’s law — inverse with distance.',
      },
      {
        question:
          'At the centre of a circular loop of radius 𝑅 carrying current 𝐼, magnetic field magnitude is:',
        options: ['𝜇₀𝐼/(4𝜋𝑅)', '𝜇₀𝐼/(2𝑅)', '𝜇₀𝐼𝑅/2', 'zero always'],
        correct: 1,
        explanation:
          '𝐵 = 𝜇₀𝐼/(2𝑅) on the axis at the loop centre (standard result).',
      },
      {
        question:
          'Average power in an AC circuit is 𝑃 = 𝑉rms𝐼rms cos𝜑, where cos𝜑 is the:',
        options: ['Quality factor', 'Power factor', 'Form factor', 'Propagation constant'],
        correct: 1,
        explanation:
          'Power factor cos𝜑 accounts for phase lag between voltage and current.',
      },
      {
        question:
          'Three equal capacitors each of capacitance 𝐶 in series have an equivalent capacitance of:',
        options: ['3𝐶', '𝐶³', '𝐶/3', '√3 𝐶'],
        correct: 2,
        explanation:
          'Series: 1/𝐶ₑq = 1/𝐶 + 1/𝐶 + 1/𝐶 ⇒ 𝐶ₑq = 𝐶/3.',
      },
      {
        question:
          'According to Bohr’s model for hydrogen-like atoms, electron angular momentum in the 𝑛th orbit is:',
        options: ['𝑛ℎ', '𝑛ℎ/(2𝜋)', 'ℎ/(2𝜋𝑛)', '𝑛²ℎ'],
        correct: 1,
        explanation:
          'Quantization condition: 𝐿 = 𝑛ℎ/2𝜋, with 𝑛 = 1,2,3,…',
      },
      {
        question:
          'Radioactive decay constant 𝜆 is related to half-life 𝑇₁/₂ by:',
        options: ['𝜆 = 𝑇₁/₂/ln 2', '𝜆 = ln 2/𝑇₁/₂', '𝜆 = 1/𝑇₁/₂²', '𝜆 = 𝑒𝑇₁/₂'],
        correct: 1,
        explanation:
          '𝑁 = 𝑁₀𝑒⁻𝜆ᵗ and 𝑇₁/₂ = ln 2/𝜆.',
      },
      {
        question:
          'Kepler’s third law for planetary orbits states that the square of period 𝑇 is proportional to:',
        options: ['semi-major axis 𝑎', '1/𝑎', '𝑎³', '𝑎²'],
        correct: 2,
        explanation:
          '𝑇² ∝ 𝑎³ for elliptical orbits around the same central mass (Newton’s form).',
      },
      {
        question:
          'Critical angle for total internal reflection occurs when light travels from medium of refractive index 𝑛₁ to 𝑛₂ (<𝑛₁) at an angle of incidence such that:',
        options: [
          'sin 𝑖𝒸 = 𝑛₁/𝑛₂',
          'sin 𝑖𝒸 = 𝑛₂/𝑛₁',
          'sin 𝑖𝒸 = √(𝑛₁𝑛₂)',
          '𝑖𝒸 = 45° always',
        ],
        correct: 1,
        explanation:
          'Snell at grazing refraction: 𝑛₁ sin 𝑖𝒸 = 𝑛₂ sin 90° ⇒ sin 𝑖𝒸 = 𝑛₂/𝑛₁.',
      },
      {
        question:
          'Zeroth law of thermodynamics is the basis for defining:',
        options: ['Entropy', 'Temperature and thermal equilibrium', 'Internal energy only', 'Enthalpy only'],
        correct: 1,
        explanation:
          'If A and B are each in equilibrium with C, they are in equilibrium with each other—foundation of temperature.',
      },
      {
        question:
          'For a plane diffraction grating with spacing 𝑑, principal maxima occur at angles 𝜃 satisfying:',
        options: ['𝑑 sin𝜃 = 𝜆/2', '𝑑 sin𝜃 = 𝑛𝜆', '𝑑 cos𝜃 = 𝑛𝜆', '𝑑 = 𝑛𝜆 sin𝜃'],
        correct: 1,
        explanation:
          'Grating equation: 𝑑 sin𝜃 = 𝑛𝜆 for order 𝑛.',
      },
      {
        question:
          'Young’s modulus is defined as the ratio of:',
        options: [
          'Shear stress to shear strain',
          'Longitudinal stress to longitudinal strain (within elastic limit)',
          'Volume stress to volume strain',
          'Tensile stress to lateral strain',
        ],
        correct: 1,
        explanation:
          '𝑌 = (𝐹/𝐴)/(Δ𝐿/𝐿) for linear elastic rods under axial load.',
      },
      {
        question:
          'When a spherically symmetric raindrop falls through air at low Reynolds number, its terminal speed scales approximately with the sphere radius 𝑟 as:',
        options: ['𝑟', '𝑟²', '1/𝑟', '√𝑟'],
        correct: 1,
        explanation:
          'From Stokes drag balancing weight, 𝑣ₜ ∝ 𝑟² for given density contrast and viscosity.',
      },
      {
        question:
          'Angular momentum of an isolated system about an inertial point is conserved in the absence of:',
        options: [
          'Any kinetic energy',
          'Net external torque',
          'Any potential energy',
          'Conservative forces only',
        ],
        correct: 1,
        explanation:
          '𝑑𝐋/𝑑𝑡 = 𝝉ₑₓₜ — zero net external torque ⇒ 𝐋 constant.',
      },
      {
        question:
          'A solid sphere, solid cylinder, and thin hoop of same radius start from rest on an incline; generally rolling without slipping, which reaches the bottom first?',
        options: [
          'Hoop (largest rotational inertia fraction)',
          'Solid sphere (smallest rotational inertia for given mass and radius among these)',
          'All arrive together always',
          'Hollow sphere beats solid sphere',
        ],
        correct: 1,
        explanation:
          'Less energy locked in rotation means more translational speed; solid sphere wins among common shapes.',
      },
      {
        question:
          'Beat frequency heard when two tones of frequencies 𝑓₁ and 𝑓₂ are superposed is:',
        options: ['(𝑓₁+𝑓₂)/2', '|𝑓₁−𝑓₂|', '𝑓₁𝑓₂', '√(𝑓₁𝑓₂)'],
        correct: 1,
        explanation:
          'Envelopes wax and wane at the difference frequency |𝑓₁−𝑓₂|.',
      },
      {
        question:
          'For a charged particle of charge 𝑞 and mass 𝑚 moving perpendicular to uniform 𝐵, the cyclotron frequency is:',
        options: ['𝑞𝐵/(2𝜋𝑚)', '2𝜋𝑞𝐵𝑚', '𝑚𝐵/(2𝜋𝑞)', '𝑞𝐵²/𝑚'],
        correct: 0,
        explanation:
          '𝜔 = 𝑞𝐵/𝑚 ⇒ 𝑓 = 𝑞𝐵/(2𝜋𝑚).',
      },
      {
        question:
          'Assuming constant 𝑔 near Earth, a simple pendulum’s small-oscillation period depends on length 𝐿 as:',
        options: ['√𝐿', '𝐿', '1/𝐿', '𝐿²'],
        correct: 0,
        explanation:
          '𝑇 ≈ 2𝜋√(𝐿/𝑔) — period scales as √𝐿.',
      },
      {
        question:
          'Electric flux through a closed Gaussian surface enclosing no net charge is:',
        options: ['Always negative', 'Zero (Gauss’s law)', '𝜀₀ times charge outside', 'Undefined'],
        correct: 1,
        explanation:
          '∮ 𝐄·𝑑𝐀 = 𝑄ₑₙ꜀/𝜀₀; if 𝑄ₑₙ꜀ = 0, total flux is zero.',
      },
    ],
    'quiz-2': [
      {
        question:
          'Stefan–Boltzmann law states that total radiant power per unit area from a black body is proportional to:',
        options: ['𝑇', '𝑇⁴', '𝑇²', '1/𝑇⁴'],
        correct: 1,
        explanation:
          '𝑃/A = 𝜎𝑇⁴ — strong temperature dependence of thermal radiation.',
      },
      {
        question:
          'Wien’s displacement law relates the wavelength 𝜆ₘₐₓ at which spectral radiance peaks to temperature as:',
        options: ['𝜆ₘₐₓ ∝ 𝑇', '𝜆ₘₐₓ ∝ 1/T', '𝜆ₘₐₓ ∝ 𝑇⁴', '𝜆ₘₐₓ independent of 𝑇'],
        correct: 1,
        explanation:
          '𝜆ₘₐₓ𝑇 ≈ constant (Wien), so hotter bodies peak at shorter wavelengths.',
      },
      {
        question:
          'In an ideal metallic conductor in electrostatic equilibrium, the electric field inside the material is:',
        options: ['Maximum at centre', 'Zero', 'Always parallel to surface', 'Equal to 𝜎/𝜀₀ everywhere inside'],
        correct: 1,
        explanation:
          'Free charges rearrange until no net field inside a conductor; field is normal at the surface.',
      },
      {
        question:
          'Two equal resistors 𝑅 in parallel have equivalent resistance:',
        options: ['2𝑅', '𝑅/2', '𝑅²', '√2 𝑅'],
        correct: 1,
        explanation:
          '1/𝑅ₑq = 1/𝑅 + 1/𝑅 ⇒ 𝑅ₑq = 𝑅/2.',
      },
      {
        question:
          'Self-inductance 𝐿 of a long solenoid increases if (other things comparable) number of turns per unit length 𝑛 changes as:',
        options: ['𝑛', '𝑛²', '1/𝑛', '√𝑛'],
        correct: 1,
        explanation:
          '𝐿 ∝ 𝑛²𝐴 for a solenoid of fixed cross-section and length (magnetic energy argument).',
      },
      {
        question:
          'Primary rainbow in a raindrop involves mainly:',
        options: [
          'Only reflection at the back surface',
          'Refraction, dispersion, and one internal reflection',
          'Diffraction only',
          'Polarization without refraction',
        ],
        correct: 1,
        explanation:
          'Sunlight refracts in, reflects once inside the droplet, and refracts out—dispersion spreads colours.',
      },
      {
        question:
          'Polaroid sheets are used to demonstrate light’s:',
        options: ['Only diffraction', 'Polarization', 'Only interference', 'Incoherence always'],
        correct: 1,
        explanation:
          'Dichroic materials preferentially transmit one polarization component.',
      },
      {
        question:
          'An 𝑛-type semiconductor is produced by doping pure silicon with atoms like:',
        options: ['Boron (trivalent)', 'Phosphorus (pentavalent)', 'Carbon only', 'Neon'],
        correct: 1,
        explanation:
          'Pentavalent donors supply extra electrons in the conduction band.',
      },
      {
        question:
          'In nuclear fission of heavy nuclei, the main energy release comes from:',
        options: [
          'Gravitational collapse',
          'Rest-mass difference—higher binding energy per nucleon in products',
          'Chemical bond breaking',
          'Pair annihilation of macrons',
        ],
        correct: 1,
        explanation:
          'Products are more tightly bound; mass defect becomes kinetic energy and γ-rays.',
      },
      {
        question:
          'Characteristically sharp spectral lines from a gas discharge tube arise because:',
        options: [
          'Electrons have continuous energy in atoms',
          'Atomic electron transitions have discrete energies',
          'Only classical vibration modes exist',
          'Nuclear sizes fluctuate randomly',
        ],
        correct: 1,
        explanation:
          'Quantized levels ⇒ photon energies ℎ𝜈 = Δ𝐸 give line spectra.',
      },
      {
        question:
          'The uncertainty principle Δ𝑥 Δ𝑝 ≳ ℏ states that:',
        options: [
          'Position can be known with arbitrary precision alone always',
          'Precise simultaneous knowledge of conjugate variables has a fundamental limit',
          'Energy is never conserved microscopically',
          'Photons are always classical particles',
        ],
        correct: 1,
        explanation:
          'Complementarity: narrowing one spread widens the other.',
      },
      {
        question:
          'Quality factor 𝑄 of a lightly damped oscillator relates to energy loss per cycle roughly as:',
        options: [
          'Higher 𝑄 means sharper resonance and lower relative dissipation',
          'Higher 𝑠 always implies no resonance',
          '𝑄 is always 1 for mechanical systems',
          '𝑄 inversely proportional to stored energy always',
        ],
        correct: 0,
        explanation:
          'High 𝑄 = narrow resonance peak and small fractional energy loss per radian of oscillation.',
      },
      {
        question:
          'When a source of sound moves toward a stationary observer, the observed frequency is:',
        options: ['Lower than emitted (red-shifted)', 'Higher than emitted (blue-shifted for sound)', 'Unchanged always', 'Zero'],
        correct: 1,
        explanation:
          'Wavefronts bunch up—Classical Doppler effect raises observed frequency when source approaches.',
      },
      {
        question:
          'For a simple harmonic oscillator, total mechanical energy (if undamped) varies with time as:',
        options: ['Sinusoidally', 'Remains constant', 'Linearly increasing', 'Exponentially decaying'],
        correct: 1,
        explanation:
          'KE and PE interchange; 𝐸 = ½𝑘𝐴² stays constant without damping.',
      },
      {
        question:
          'The dominant contribution to continuous (“bremsstrahlung”) X-rays from an X-ray tube is due to:',
        options: [
          'Nuclear gamma decay',
          'Deceleration of energetic electrons in the target',
          'Superconducting transitions',
          'Sound waves in the anode',
        ],
        correct: 1,
        explanation:
          'Electrons brems (brake) in Coulomb fields of target nuclei, radiating a continuous spectrum.',
      },
      {
        question:
          'A zener diode in reverse breakdown is commonly used as a:',
        options: ['Amplifier', 'Voltage reference regulator', 'High-speed switching only without breakdown', 'Solar cell'],
        correct: 1,
        explanation:
          'Near-constant reverse voltage over a current range stabilizes supply rails.',
      },
      {
        question:
          'The Hall effect in a conductor subjected to perpendicular magnetic field demonstrates:',
        options: [
          'Deflection of charge carriers and transverse voltage',
          'Absence of magnetic field',
          'Only Faraday induction in bulk',
          'Gravitational redshift',
        ],
        correct: 0,
        explanation:
          'Lorentz force separates charges until Hall electric field balances sideways drift.',
      },
      {
        question:
          'A standing wave on a string fixed at both ends has nodes separated by:',
        options: ['𝜆/4', '𝜆/2', '𝜆', '2𝜆'],
        correct: 1,
        explanation:
          'Consecutive nodes are half a wavelength apart.',
      },
      {
        question:
          'Capillary rise of a wetting liquid in a narrow tube is caused primarily by:',
        options: ['Bernoulli pressure in flow', 'Surface tension and contact angle', 'Only viscosity', 'Only thermal expansion'],
        correct: 1,
        explanation:
          'Curved meniscus creates Laplace pressure difference; balances hydrostatic column height.',
      },
      {
        question:
          'In the usual laboratory Franck–Hertz style demonstration, quantized atomic excitation is shown via:',
        options: [
          'Photoelectric current vs intensity',
          'Electron–atom collisions with threshold energies matching level spacings',
          'Rotation of polarizer sheets',
          'Half-life measurement only',
        ],
        correct: 1,
        explanation:
          'Inelastic electron collisions excite discrete atomic states when incident energy crosses spacings.',
      },
      {
        question:
          'Two coherent sources are needed for stable interference patterns mainly because they maintain a fixed:',
        options: ['Intensity ratio only', 'Phase relationship', 'Polarization angle only', 'Colour temperature only'],
        correct: 1,
        explanation:
          'Coherence requires stable phase difference; independent ambient sources de-phase too fast.',
      },
      {
        question:
          'For an ideal gas in a reversible adiabatic process, 𝑃𝑉^𝛾 remains constant. The exponent 𝛾 is defined as:',
        options: ['𝛾 = 𝐶ᵥ/𝐶ₚ', '𝛾 = 𝐶ₚ/𝐶ᵥ', '𝛾 = 𝐶ₚ − 𝐶ᵥ only', '𝛾 = 𝑅/𝐶ᵥ only'],
        correct: 1,
        explanation:
          'Adiabatic relations use 𝛾 = 𝐶ₚ/𝐶ᵥ > 1 for ideal gases.',
      },
      {
        question:
          'A particle in uniform circular motion has acceleration that is:',
        options: ['Tangential and constant magnitude', 'Centripetal toward the centre', 'Zero', 'Always parallel to velocity'],
        correct: 1,
        explanation:
          'Speed can be constant but velocity direction changes — acceleration points radially inward.',
      },
      {
        question:
          'Gravitational potential energy of two point masses 𝑚 and 𝑀 separated by 𝑟 (zero at infinity) is:',
        options: ['+𝐺𝑀𝑚/𝑟', '−𝐺𝑀𝑚/𝑟', '−𝐺𝑀𝑚𝑟', '+𝐺𝑀𝑚𝑟²'],
        correct: 1,
        explanation:
          'Bound states have negative potential energy; work is done by the field bringing them from ∞.',
      },
      {
        question:
          'Which statement best describes a laser compared with ordinary thermal light?',
        options: [
          'Incoherent, broad bandwidth always',
          'Coherent, often high directionality and narrow spectral linewidth',
          'Always unpolarized',
          'Cannot be amplified',
        ],
        correct: 1,
        explanation:
          'Stimulated emission in a cavity yields coherence and beams with small divergence.',
      },
    ],
  },
};
