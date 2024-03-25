import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/sub-menu";
import { StaticPages } from "@/content/data";

export default function ToplulukPage() {
  return (
    <>
      <PageTitle>Reyhan Çetin ve Arkadaşları - Organizasyon Yapısı</PageTitle>
      <PageImage bgImage="tMerhaba">Organizasyon Yapısı</PageImage>
      <PageContent h2Title="Organizasyon Yapısı">
        <div className="px-2 md:px-4 text-left">
          <ol className="p-2 list-decimal">
            <li>
              <h3>Federasyon</h3>
            </li>
            <ol className="p-2 list-decimal">
              <li>
                <h4 className=" pt-4 italic font-semibold">Yapısı</h4>
              </li>
              <ol className="p-2 list-decimal">
                <li>Hiyerarşik olarak en üstte bulunuyor,</li>
                <li>Ancak, icra ve komuta yetkisi yok</li>
                <li>Kaptan'lara emir veremez</li>
                <li>
                  Kendi bütçesinde toplanmış kaynakları kalıcı projelere
                  yönlendirir.
                </li>
              </ol>
              <li>
                <h4 className=" pt-4 italic font-semibold">Kaynakları</h4>
              </li>
              <ol className="p-2 list-decimal">
                <li>üyelerden toplanan ücretlerin 50%'si</li>
                <li>çalışma faaliyetlerinden toplananların 20%'si</li>
              </ol>
              <li>
                <h4 className=" pt-4 italic font-semibold">Kaynak Kullanımı</h4>
              </li>
              <ol className="p-2 list-decimal">
                <li>
                  Kaptanlardan gelen proje taleplerinden, onayladıklarına kaynak
                  aktarırlar.
                </li>
                <li>
                  Eski kaptanların - gerekli durumlarda - bazı giderleri
                  karşılanabilir.
                </li>
              </ol>
            </ol>
            <li>
              <h3>Kaptanlar ve Yıldız Gemileri</h3>
            </li>
            <ol className="p-2 list-decimal">
              <li>
                <h4 className=" pt-4 italic font-semibold">Yapısı</h4>
              </li>
              <ol className="p-2 list-decimal">
                <li>Kaptanlar en üst faaliyet yetkisine sahiptir</li>
                <li>Federasyon ya da önceki kaptanlardan emir almazlar</li>
                <li>
                  Federasyonlardan proje onayı ve bütçe talep edebilirler.
                </li>
                <li>
                  Her yıldız gemisi belli bir misyon ile oluşur - bu misyon
                  sonra Kaptan'ın üyelerinden oluşan kurul kararı ile
                  değişebilir.
                </li>
                <li>Kaptan'lar üyelik için herhangi bir ödeme yapmaz.</li>
              </ol>
              <li>
                <h4 className=" pt-4 italic font-semibold">Kaynakları</h4>
              </li>
              <ol className="p-2 list-decimal">
                <li>üyelerden toplanan ücretlerin 50%'si</li>
                <li>çalışma faaliyetlerinden toplananların 20%'si</li>
              </ol>
              <li>
                <h4 className=" pt-4 italic font-semibold">Kaynak Kullanım</h4>
              </li>
              <ol className="p-2 list-decimal">
                <li>Kaptan'ın resmi faaliyet giderleri (vergi... vs)</li>
                <li>
                  Kaptan'ın şehir ziyaretleri ya da organizasyon masrafları
                </li>
                <li>Misafir üyeleri ağırlama maliyetleri</li>
                <li>
                  Kaptanlar, yolculuktan ayrılırken, kendilerine verilmiş
                  kaynakları;
                </li>

                <ol className="p-2 list-decimal">
                  <li>İsterlerse sonraki Kaptan'a</li>
                  <li>Kendi biyolojik aile ve çevresine</li>
                  <li>Kendi hesabına devredebilir</li>
                  <li>Ya da dilediği yere bağış yapabilir.</li>
                </ol>
              </ol>
            </ol>
            <li>
              <h3>Yıldız Gemisi Yönetim Kurulu</h3>
            </li>
            <ol className="p-2 list-decimal">
              <li>
                <h4 className=" pt-4 italic font-semibold">Yapısı</h4>
              </li>
              <ol className="p-2 list-decimal">
                <li>Kaptan ve üyelerden oluşur.</li>
                <li>Oy çokluğu ile karar alır.</li>
                <li>
                  Eşitlik durumunda, Kaptan'ın oyu kazanan tarafı belirler.
                </li>
                <li>Kaptan'ın belli durumlarda veto yetkisi olabilir.</li>
                <li>üyeler, Kaptan'ı oylayamaz ya da değiştiremez.</li>
                <li>
                  üyeler isterlerse Kaptan ve Yıldız Gemisi'nden ayrılabilirler.
                </li>
              </ol>
            </ol>
            <li>
              <h3>üyeler</h3>
            </li>
            <ol className="p-2 list-decimal">
              <li>
                <h4 className=" pt-4 italic font-semibold">Yapısı</h4>
              </li>
              <ol className="p-2 list-decimal">
                <li>Her üye belli bir Kaptan ve Yıldız Gemisi'ne bağlıdır.</li>
                <li>üyeler düzenli olarak aidat ödemek zorundadır.</li>
                <li>
                  üyeler, Kaptan'ın hedefleri doğrultusunda faaliyetlerde görev
                  alır.
                </li>
                <li>
                  Görev almayan ve ödeme yapmayan üyelerin üyelikleri, Yıldız
                  Gemisi üye kurulunun çoğunluk kararı ile dondurulabilir ya da
                  son bulabilir.
                </li>
              </ol>
              <li>
                <h4 className=" pt-4 italic font-semibold">Hakları</h4>
              </li>
              <ol className="p-2 list-decimal">
                <li>
                  Her üye Kaptan tarafından mümkünse en az yılda bir kez ziyaret
                  edilmeli,
                </li>
                <li>
                  üyeler, Kaptan'ın misafirhane ya da çiftliğinde yılda bir kez
                  bir hafta sonu misafir olabilirler.
                </li>
                <li>Yönetim kurulunda konuşma ve oy verme yetkileri vardır.</li>
              </ol>
              <li>
                <h4 className=" pt-4 italic font-semibold">Ödemeler</h4>
              </li>
              <ol className="p-2 list-decimal">
                <li>
                  Her üye aylık 30 USD (şimdilik kurla 900 TL) karşılığı ödeme
                  yapar.
                </li>
                <li>
                  Ayrıca, asistan ya da moderatör olarak görev alabilir - ki bu
                  ödeme masraflarını karşılamasını sağlayabilir.
                </li>
                <li>
                  üyelerden, farklı bir isim ve başlık altında başka bir ödeme
                  alınamaz.
                </li>
              </ol>
              <li>
                <h4 className=" pt-4 italic font-semibold">Aday üyelik</h4>
              </li>
              <ol className="p-2 list-decimal">
                <li>
                  Herkes üye, ilk aşamada üye adayı olarak topluluğa dahil olur.
                </li>
                <li>
                  Belli bir sınama ve gözlem sonucunda adaylar tam üye olarak
                  kabul edilir.
                </li>
                <li>
                  H12 olgunluğu ve çalışma anlayışının gelişmiş olması beklenir.
                </li>
              </ol>
            </ol>
          </ol>
        </div>
      </PageContent>

      <SubPages subPage={StaticPages[2]} id="2" />
    </>
  );
}
