<script setup lang="ts">
import CardItem from '../components/tiktok/CardItem.vue'

const posts = [
  {
    "title": "#pentol #osengmercon #bolosego",
    "url": "https://www.tiktok.com/@bolosego_official/video/7405451255604301062",
    "thumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/83386e69c3a8491cb76d69bf1b0ebc3f_1724215991~tplv-dmt-logom:tos-useast2a-v-0068/okACeVNSAcjfInJILuADxEIGFgiSiAXEsMeCr0.image?lk3s=b59d6b55&x-expires=1735272000&x-signature=X0thND1e4pFX3nfbWaIdXj542I0%3D&shp=b59d6b55&shcp=-"
  },
  {
    "title": "#resep #pentoljadul #masakanelma #masaksukasuka #sukamasakmasak",
    "url": "https://www.tiktok.com/@masakan.elma/video/7428058584220437766",
    "thumb": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/279fea33760f4db0a413df719f9721dc_1729943505?lk3s=b59d6b55&x-expires=1735272000&x-signature=zfhaJ38ijr2BGRoCTH4tIPpjxeM%3D&shp=b59d6b55&shcp=-"
  },
  {
    "title": "#rekomendasibakso yg rasanya tuh enak bgt dari #baksoalamsuper terbuat dari daging sapi & ayam yg fresh ..harganya jg ekonomis cocok untuk buat bakso kuah, campuran mie ayam, bakso bakar dll #bakso #baksoviral #baksoalam #shoptokopedia #promoguncang99 #gilagilajualan",
    "url": "https://www.tiktok.com/@magdalenacallista/video/7414391403590995205",
    "thumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oc6blAlHpkBwMiIz3cifgAogLNJIp8EKI2BzCI~tplv-dmt-logom:tos-useast2a-v-0068/oE1IIwF8AUJvelrKBADAQW54RzmQaCHEATEPfL.image?lk3s=b59d6b55&x-expires=1735272000&x-signature=q6SF%2BZZAMTqnCHh%2F3r8dAgoL8IA%3D&shp=b59d6b55&shcp=-"
  },
  {
    "title": "Gw tungguin pentol kuahnya ya neng @Maudy",
    "url": "https://www.tiktok.com/@freda.pria/video/7444408981604306231",
    "thumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oEQjUieUnBTu3Uy2ABB8F98TiGwIJIfRFEs7PR~tplv-dmt-logom:tos-useast2a-v-0068/oI91EJAaFBAo2IAuAei7BRnABEyQ6CyTIaf8Pi.image?lk3s=b59d6b55&x-expires=1735272000&x-signature=tRj2L2eSlm0GxI0Av2tGnagHvFc%3D&shp=b59d6b55&shcp=-"
  },
  {
    "title": "Surga adalah tempat dan Pentol adalah makanan 22nya terenak kok #kuliner #food #makan #masak #kulinerindonesia #rempahlady",
    "url": "https://www.tiktok.com/@rempahlady/video/7338022547100847365",
    "thumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/ocIAHigJBuePH16qKy89AMkVKVECIuVvBv5mio~tplv-dmt-logom:tos-useast2a-v-0068/oUKIhfeVqgJjDKAIA2eEAiES5CqFEqquLdSTAD.image?lk3s=b59d6b55&x-expires=1735272000&x-signature=oNtoVhND7m8HY2LIIW85yi1fCcY%3D&shp=b59d6b55&shcp=-"
  },
  {
    "title": "Resep Pentol Ayam Kriwil (untuk 80 pcs) Bahan: 500 gr ayam giling paha 1 sdm kaldu sapi bubuk ½ sdm garam ½ sdt penyedap 4 sdt gula pasir ½ sdt merica 1 butir putih telur 1 sdm bawang putih halus 2 sdm bawang merah goreng 100 ml air es 200 gr tapioka 40 gr tepung terigu pro sedang Bahan isian: keju cheddar, potong kotak cabai rawit merah iris Bahan saus: 3 sdm saus tomat 3 sdm saus sambal 1 sdm bawang putih halus 100 ml air 2 sdt tepung terigu Cara membuat: 1. Campurkan ayam dengan garam, kaldu sapi bubuk, gula pasir, merica dan penyedap, aduk hingga lengket 2. Masukkan air es, putih telur, bawang merah goreng dan bawang putih, aduk rata lalu masukkan tepung tapioka dan tepung terigu, aduk hingga rata 3. Didihkan air lalu kecilkan api. Untuk isian keju dan rawit, tempelkan adonan di dinding mangkuk, letakkan isian lalu bentuk bulat 4. Rebus hingga matang dan kukus selama 10 menit 5. Untuk saus, masak air dan tepung terigu, aduk rata kemudian masukkan bawang putih, saus sambal dan saus tomat, masak sesaat hingga mendidih 6. Pentol ayam kriwil siap disajikan",
    "url": "https://www.tiktok.com/@devina.hermawan/video/7334976855411395846",
    "thumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/586ade4c8af34a66aa1874bb65bb3736_1707807399~tplv-dmt-logom:tos-useast2a-v-0068/oclQgOlIQpAICgL6tLi3IAIAWGefevApjAEPGS.image?lk3s=b59d6b55&x-expires=1735272000&x-signature=kv%2B8nwC4YJXF2FGdwloqPaZUTqE%3D&shp=b59d6b55&shcp=-"
  },
  {
    "title": "Pentol ini kalian harus coba #fyp #baksoviral #mukbang #kpop",
    "url": "https://www.tiktok.com/@doyanmakanenak_/video/7420511826741349637",
    "thumb": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  },
  {
    "title": "Bismillah. RESEP CILOK/BASO ACI/PENTOL KANJI ENAK, TETEP EMPUK WALAU DINGIN DAN ANTI GAGAL. Video kali ini kita akan membuat cilok atau Baso aci yang tetap EMPUK walau sudah dingin, pastinya resep ini anti gagal dan mudah, CILOK! Pentol Kanji Hasil : 63 buah Bahan: 300 gr Tepung Tapioka 250 gr Tepung Terigu 10 siung Bawang Putih 1/2 sdm Garam 1/2 sdm Kaldu Bubuk 1 sdt Lada Bubuk 500 ml air panas Bahan Isian : 10 butir bawang merah(iris tipis, goreng sampai kekuningan) Bahan saus : 2 sdm Saos Tomat 2 sdm Saos Sambal 1 sdt Cabe Bubuk/cabe segar halus Secukupnya air panas ~ Cara Pembuatannya simak di video yah ~ #cilok #cilokempuk #cilokkuah #resepcilok #resep cilok kuah isi mercon #cilokenak #baksocilok #fyp #resepsimple",
    "url": "https://www.tiktok.com/@ardiyantiu/video/7314962608291843334",
    "thumb": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  },
  {
    "title": "Membalas @Archin berkali kali kesini tutup terus akhirnya buka lagi ni pentol cak no pegirian depan puskesam sidotopo #pentolcakno #pentollegendsurabaya #pentollegend #pentolenaksurabaya #pentolviralsurabaya #elmael #kulinersurabaya",
    "url": "https://www.tiktok.com/@congmael/video/7418388109827640581",
    "thumb": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  },
  {
    "title": "Setelah beberapa kali gagal bikin bakso sapi, akhirnya aku menemukan resep dan cara membuat bakso kenyal anti gagal satu ini, hasilnye enak banget kenyal dan kalo digigit renyah gimanaaa gitu 😁 Yuk bun, dicobain resepnya #CaraMembuatBaksoSapi #ResepPentolBakso #Bakso #Cemilan #Jajanan #ResepMudah",
    "url": "https://www.tiktok.com/@ummu_husna1/video/7360912785569615110",
    "thumb": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  },
  {
    "title": "wajib nyetok nih pentol mercon nya cocok yg malas masak#pentolmercon #osengpentol #makananpedas #makanlokal #wibgajian #fypp",
    "url": "https://www.tiktok.com/@snack_barkah/video/7425039606317337862",
    "thumb": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  },
  {
    "title": "SI pentol level NERAKA … ini mmg pedesnya sepedas mulut netizen yg suka julid2 tp bikin nagih. Biarpun namanya pentol tp dagingnya berasa karena mmg terbuat 95% daging trus bumbunya jg khas unik. #nanakoot #mukbang #pentoljulid #makanantiktok #pentolpedas",
    "url": "https://www.tiktok.com/@rempahlady/video/7264064364452400389",
    "thumb": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  }
]
</script>

<template>
  <main>
    <div class="w-full h-screen">
      <div class="mt-4 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
        <div v-for="post in posts" :key="post.url">
          <CardItem :post="post" />
        </div>
      </div>
    </div>
  </main>
</template>
