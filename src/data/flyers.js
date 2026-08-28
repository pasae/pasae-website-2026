import glade from '../assets/flyers/glade.jpg'
import gilead from '../assets/flyers/gilead.jpg'
import mixer from '../assets/flyers/mixer.jpg'
import passpooky from '../assets/flyers/passpooky.jpg'
import lumpia from '../assets/flyers/lumpia.jpg'
import banquet from '../assets/flyers/banquet.jpg'
import uji from '../assets/flyers/uji.jpg'
import psunday from '../assets/flyers/psunday.jpg'
import basf from '../assets/flyers/basf.jpg'
import chipotle from '../assets/flyers/chipotle.jpg'
import genMeet1 from '../assets/flyers/gen_meet_1.jpg'
import genMeet2 from '../assets/flyers/gen_meet_2.jpg'
import gre from '../assets/flyers/gre.jpg'
import intApp from '../assets/flyers/int_app.jpg'
import movieNight from '../assets/flyers/movie_night.jpg'
import netapp from '../assets/flyers/netapp.jpg'
import pathways from '../assets/flyers/pathways.jpg'
import pdw from '../assets/flyers/pdw.jpg'
import springApp from '../assets/flyers/spring_app.jpg'
import infoSp19 from '../assets/flyers/info_sp19.jpg'

export const FLYERS = [
  { src: glade, name: "PAS'Glade & Chill", kind: 'Social', featured: true },
  { src: psunday, name: 'Professional Sunday', kind: 'Professional', featured: true },
  { src: mixer, name: 'Alumni Mixer', kind: 'Professional', featured: true },
  { src: passpooky, name: "Pas'Pooky Social", kind: 'Social', featured: true },
  { src: gilead, name: 'Gilead Sciences Panel', kind: 'Professional', featured: true },
  { src: lumpia, name: 'Lumpia Fundraiser', kind: 'Fundraiser', featured: true },
  { src: uji, name: 'Uji Time Fundraiser', kind: 'Fundraiser', featured: true },
  { src: banquet, name: 'Winter Banquet', kind: 'Social', featured: true },
  { src: netapp, name: 'NetApp Company Tour', kind: 'Professional' },
  { src: pathways, name: 'Pathways: A Grad Student Panel', kind: 'Professional' },
  { src: pdw, name: 'Professional Development Workshop', kind: 'Professional' },
  { src: gre, name: 'GRE Test Prep', kind: 'Professional' },
  { src: basf, name: 'Bay Area Science Festival', kind: 'Outreach' },
  { src: chipotle, name: 'Chipotle Fundraiser', kind: 'Fundraiser' },
  { src: movieNight, name: 'Movie Night', kind: 'Social' },
  { src: genMeet1, name: "PASAE'ence of Exercise", kind: 'General Meeting' },
  { src: genMeet2, name: "PAS'cience of Sleep", kind: 'General Meeting' },
  { src: infoSp19, name: 'Spring Info Session', kind: 'General' },
  { src: intApp, name: "PASAE'd Kicks Intern Program", kind: 'Internship' },
  { src: springApp, name: "PASAE'd Kicks Intern Program — Spring", kind: 'Internship' },
]

export const FEATURED_FLYERS = FLYERS.filter((f) => f.featured)