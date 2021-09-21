import {BookInformation, BookSlider, Comments} from "../../components";
const Books=(props)=>{
    return(<div>
        <BookInformation
            name={"کار عمیق"}
            image={"http://sanab.erbp.ir/public/files//60fd2fcb562c0189641968.jpg"}
            author={"کال نیوپورت"}
            translator={"ناهید ملکی"}
            nariator={"علی بندری"}
            publisher={"نشر نوین"}
            language={"فارسی"}
            page={"120"}
            ISBN={"876B877"}
            date={"1399/05/04"}
            description={
               "<p>بسیاری از ما، افرادی که چندین کار را به صورت همزمان انجام می‌دهند، تحسین می‌کنیم. دوست داریم خودمان هم با انجام همزمان و یا سریع چندین کار، بازدهی‌مان را بیشتر، و در وقت‌مان صرفه‌جویی کنیم. اما مشکل بزرگی در این نگرش وجود دارد: هیچ نتیجه مهم و قابل افتخاری با این شیوه به دست نمی‌آید!</p>" +
               "<p>چرا بدون کار عمیق و متمرکز، نمی‌توان به نتایج آن‌چنانی رسید؟ کال نیوپورت در کتاب کار عمیق (که از زمان انتشار در لیست پرفروش‌های نیویورک تایمز، وال استریت ژورنال و آمازون قرار گرفته است)، می‌گوید که «تمرکز» در دنیای پرآشوب امروز، حلقه مفقوده موفقیت است.</p>"+
               "<p>بسیاری از ما، افرادی که چندین کار را به صورت همزمان انجام می‌دهند، تحسین می‌کنیم. دوست داریم خودمان هم با انجام همزمان و یا سریع چندین کار، بازدهی‌مان را بیشتر، و در وقت‌مان صرفه‌جویی کنیم. اما مشکل بزرگی در این نگرش وجود دارد: هیچ نتیجه مهم و قابل افتخاری با این شیوه به دست نمی‌آید!</p>" +
               "<p>چرا بدون کار عمیق و متمرکز، نمی‌توان به نتایج آن‌چنانی رسید؟ کال نیوپورت در کتاب کار عمیق (که از زمان انتشار در لیست پرفروش‌های نیویورک تایمز، وال استریت ژورنال و آمازون قرار گرفته است)، می‌گوید که «تمرکز» در دنیای پرآشوب امروز، حلقه مفقوده موفقیت است.</p>"
            }
        />
        <Comments/>
        <BookSlider
            title={"کتاب های پربازدید"}
            items={[
                {
                    name:"مغازه خودکشی",
                    image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",
                    link:"/"
                },
                {
                    name:"مغازه خودکشی",
                    image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",
                    link:"/"
                },
                {
                    name:"مغازه خودکشی",
                    image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",
                    link:"/"
                },
                {
                    name:"مغازه خودکشی",
                    image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",
                    link:"/"
                },
                {
                    name:"مغازه خودکشی",
                    image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",
                    link:"/"
                },
                {
                    name:"مغازه خودکشی",
                    image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",
                    link:"/"
                },
            ]}
        />
        <BookSlider
            title={"جدیدترین کتاب ها"}
            items={[
                {
                    name:"مغازه خودکشی",
                    image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",
                    link:"/"
                },
                {
                    name:"مغازه خودکشی",
                    image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",
                    link:"/"
                },
                {
                    name:"مغازه خودکشی",
                    image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",
                    link:"/"
                },
                {
                    name:"مغازه خودکشی",
                    image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",
                    link:"/"
                },
                {
                    name:"مغازه خودکشی",
                    image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",
                    link:"/"
                },
                {
                    name:"مغازه خودکشی",
                    image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",
                    link:"/"
                },
            ]}
        />
    </div>)
}
export default Books;