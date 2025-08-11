# Move Text
## React Js ile geliştirilmiş, cihazlar arası güvenli metin aktarım uygulaması.

Bu proje, farklı cihazlar arasında kopyalamak istediğiniz metin ve linkleri güvenli ve hızlı bir şekilde aktarmak için geliştirilmiş uygulamadır. Apple'ın Evrensel Pano (Universal Clipboard) özelliğinden ilham alarak, kullanıcıların bir cihazda kopyaladıkları bir metni, sistem tarafından oluşturulan benzersiz bir kimlik (ID) ve kullanıcı tanımlı bir parola aracılığıyla başka bir cihazdan kolayca almalarını sağlar.

Uygulamanın temel amacı, platform ve konumdan bağımsız olarak, geçici metin tabanlı verilerin iki nokta arasında güvenli bir koridor üzerinden senkronizasyonunu sağlamaktır. 

## Nasıl Çalışır?
Uygulama, bir kaynak cihazdan veri gönderme ve bir hedef cihazdan veri alma olmak üzere iki temel işlem üzerine kuruludur.

Veri Gönderme (Kaynak Cihaz)
- Metin Girişi: Aktarılacak metin, uygulama arayüzündeki ilgili metin kutusuna yazılır veya yapıştırılır.

- Parola Belirleme: Verinin güvenliğini sağlamak amacıyla kullanıcı tarafından bir parola belirlenir ve ilgili alana girilir. Bu parola, verinin şifrelenmesi için anahtar görevi görür.

- Aktarım Başlatma: "Create ID" butonuna basıldığında, girilen metin belirlenen parola ile şifrelenerek sunucuya yüklenir.

- ID Alımı: Başarılı yüklemenin ardından sistem, bu veri paketine özel, benzersiz bir Aktarım ID'si üretir ve kullanıcıya gösterir.

Veri Alma (Hedef Cihaz)

- ID Girişi: Kaynak cihazda oluşturulan Aktarım ID'si, hedef cihazdaki uygulama arayüzünde ilgili alana girilir.

- Parola Girişi: Kaynak cihazda belirlenen parolanın aynısı, hedef cihazdaki şifre alanına yazılır.

- Veriyi Çekme: "Get Text" butonuna tıklandığında, sistem girilen ID ve parolayı doğrular.

- Sonuç: Doğrulama başarılı olursa, şifrelenmiş veri sunucudan çekilir, şifresi çözülür ve kullanıcıya gösterilir. Böylece metin, kaynak cihazdan hedef cihaza güvenli bir şekilde aktarılmış olur.

## Kullanılan kütüphane ve teknolojiler
- React Js  
- React Router  
- Css  
- Bootstrap  
- axios

https://github.com/user-attachments/assets/ea8e306b-478a-447a-b4e3-dd9c449d2615

