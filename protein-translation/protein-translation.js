const codonDictionary = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
};

export const translate = (rnaSequence = "") => {
  const codons = splitRNAToCodon(rnaSequence);
  const translation = [];
  for (let i = 0; i < codons.length; i += 1) {
    const value = codonDictionary[codons[i]];
    if (!value) throw new Error("Invalid codon");
    if (value === "STOP") {
      break;
    }
    translation.push(value);
  }
  return translation;
};

function splitRNAToCodon(rnaSequence) {
  const sequenceLength = rnaSequence.length;
  const codons = [];
  for (let i = 0; i < sequenceLength; i += 3) {
    codons.push(rnaSequence.substring(i, i + 3));
  }
  return codons;
}

