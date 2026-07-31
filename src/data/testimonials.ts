export type Testimonial = {
  id: string;
  name: string;
  role: string;
  image: string;
  preview: string;
  full: string;
};

/** Real patient & peer reviews — photos live in /public/images/testimonials */
export const testimonials: Testimonial[] = [
  {
    id: 'rajiv-shukla',
    name: 'Dr. Rajiv Shukla',
    role: 'Ex. Head Consultant & HOD Anesthesiology, Tata Main Hospital, Jamshedpur',
    image: '/images/testimonials/Dr. Rajiv Shukla.png',
    preview:
      'As a medical colleague, I have the highest respect for Dr. Nitin Dhira for his exceptional skills as an ophthalmic surgeon…',
    full: `As a medical colleague, I have the highest respect for Dr. Nitin Dhira for his exceptional skills as an ophthalmic surgeon. Having observed his clinical work closely, I am impressed by his surgical precision in advanced cataract and glaucoma treatments. He utilizes the latest surgical advancements to deliver outstanding visual results, always prioritizing patient safety and comfort.

Beyond his technical brilliance, Dr. Dhira treats every patient with genuine warmth and clarity, making them feel safe and informed. I confidently recommend him to anyone seeking top-class eye care.

Note: Surgery by Dr. Nitin G. Dhira was performed at Jamshedpur Eye Hospital, Jamshedpur.`,
  },
  {
    id: 'nand-singh',
    name: 'Nand Singh',
    role: 'Retired Development Officer, LIC of India · Working President, Jamshedpur Division Retired Insurance Employees\' Association',
    image: '/images/testimonials/Nand Singh.png',
    preview:
      'I always preferred Sankara Nethralaya, Chennai for glaucoma. After meeting Dr. Nitin in 2018, and my cataract surgery in 2024, I no longer need to travel…',
    full: `Sarada Netralaya is the super speciality eye care hospital in Jamshedpur. I always preferred to visit Sankara Nethralaya, Chennai for glaucoma treatment. I came to know about Dr. Nitin G. Dhira and met him on 16.07.2018 and started getting treatment from him.

I have an excellent experience at Sarada Netralaya for glaucoma treatment and cataract surgery done by Dr. Nitin on 24.01.2024. I am fully satisfied and I have now no need to visit Sankara Nethralaya, Chennai — because Dr. Nitin is available in Jamshedpur.

Sarada Netralaya is a centre for comprehensive eye care and a preferred eye hospital for the people of Jamshedpur. Doctors and staff are soft spoken, cooperative, well behaved and very attentive. The hospital has the capacity and capability to provide the highest level of eye treatment. I recommend others to visit Sarada Netralaya if needed.`,
  },
  {
    id: 'ratan-shome',
    name: 'Ratan Shome',
    role: 'Retired UCO Branch Manager, Baridih',
    image: '/images/testimonials/Ratan Shome.png',
    preview:
      'Medical treatment is often tough and uncertain. Dr. Nitin G. Dhira is exceptional — my wife has been under his care for a right-eye stroke…',
    full: `Medical treatment is not just tough but also turbulent and unpredictable. Eight out of ten patients feel they are not treated properly.

Doctor Nitin G. Dhira is exceptional in this regard. For the last six months my wife has been under his treatment after she suffered a right-eye stroke. With a group of well-mannered staff, Dr. Dhira has done excellent treatment. I must thank him for his dedicated and skilled care.`,
  },
  {
    id: 'raghubar-sharan',
    name: 'Dr. Raghubar Sharan',
    role: 'Senior Orthopaedic Surgeon · Retired from TMH',
    image: '/images/testimonials/Dr.Raghubar Sharan.png',
    preview:
      'My wife was operated by Dr. Nitin using Johnson & Johnson ODYSSEY Toric Lens — the first time in Jharkhand. Next day her distant vision was 6/6…',
    full: `My wife got operated by Dr. Nitin G. Dhira using Johnson & Johnson ODYSSEY Toric Lens for the first time in Jharkhand. The very next day her distant vision was 6/6 and near vision was N8. After 7 days near vision became N6. We are very much satisfied.`,
  },
  {
    id: 'sarvadeep-singh',
    name: 'Sarvadeep Singh',
    role: 'Retired Tata Steel Officer',
    image: '/images/testimonials/Sarvadeep Singh.png',
    preview:
      'Sarada Netralaya has excellent eye-care facilities. Dr. Nitin is gentle, deeply caring, and an absolute master of his profession…',
    full: `Sarada Netralaya is a professional nursing home with excellent facilities in eye care. Dr. Nitin Dhira is an absolute master of his profession — gentle and deeply caring.

As a very satisfied patient after my phaco surgery, I highly appreciate his personal care, patient-friendly nature, and excellent surgical skills. His services are also very reasonably priced. I strongly recommend him and Sarada Netralaya for any eye care needs.`,
  },
  {
    id: 'rajesh-tulsiyan',
    name: 'Rajesh Tulsiyan',
    role: 'Proprietor, Tulsiyan Tele Marketing',
    image: '/images/testimonials/Rajesh Tulsiyan.png',
    preview:
      'I had my cataract surgery with Dr. Nitin G. Dhira. He is an excellent doctor, and the entire staff was professional, caring and helpful…',
    full: `I had my cataract surgery performed by Dr. Nitin G. Dhira. He is an excellent doctor, and the entire staff was very professional, caring, and helpful throughout the process.

The operation theatre was neat, clean, and well-maintained. I am very satisfied with the treatment and overall experience.`,
  },
];
