export type ConstitutionalOfficialItem = {
  index: number
  designation: string
  nameAndOrdinal: string
}

export const constitutionalOfficials = {
  sectionTitle: 'CONSTITUTIONAL OFFICIALS',
  items: [
    {
      index: 1,
      designation: 'President Of India',
      nameAndOrdinal: 'Smt. Droupadi Murmu (15th)',
    },
    {
      index: 2,
      designation: 'Vice President Of India',
      nameAndOrdinal: 'Shri C. P. Radhakrishnan (14th)',
    },
    {
      index: 3,
      designation: 'Chief Justice Of India',
      nameAndOrdinal: 'Justice Surya Kant (53rd)',
    },
  ] satisfies ConstitutionalOfficialItem[],
} as const