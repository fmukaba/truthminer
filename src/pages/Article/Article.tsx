import { FC, useContext } from "react";
import { useParams } from "react-router-dom";
import { FirestoreContext } from "../../context/Context";
import { NotFound } from "../../components";
import { ArticleContainer, TitleContainer, Content } from "./styles";

const ArticlePage: FC = () => {
  const data = useContext(FirestoreContext);
  const { id } = useParams();
  let targetArticle = data.articles.find((element) => element.id === id);


  const blogArticleHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Understanding God's Will</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f8f8f8;
      color: #333;
    }
    .container {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    h1 {
      font-size: 32px;
      color: #333;
    }
    p {
      margin-bottom: 20px;
    }
    blockquote {
      margin: 0;
      padding: 10px 20px;
      background-color: #f9f9f9;
      border-left: 5px solid #ccc;
    }
    blockquote p {
      margin: 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <p>"What is God's will for my life?" I've often asked myself this question.</p>
    <p>God made us in his image (Gen 1:27) and for fellowship with Him (John 17), to the praise of His glory.</p>
    <p>After Sin entered humanity (Genesis 3), we have fallen short of the Glory of God. Since that day, God has been working to make a way for us to be reunited with Him. Which He accomplished in the life, death and resurrection of our Lord, Jesus Christ.</p>
    <p>The Christian finds himself in this in-between state in the history of God’s redemption of His creation.</p>
    <p>Jesus, by faith in His (Him) name has made a way for us to receive forgiveness and be reconciled to God. Yet, instead of immediately being ushered in His presence and all the consequences of sin undone when one put their faith in Christ, God has chosen a more glorious scenario: (Progressive) sanctification.</p>
    <p>Through Ezekiel, God said:</p>
    <blockquote>
      <p>And I will give you a new heart, and a new spirit I will put within you. And I will remove the heart of stone from your flesh and give you a heart of flesh. And I will put my Spirit within you, and cause you to walk in my statutes and be careful to obey my rules. You shall dwell in the land that I gave to your fathers, and you shall be my people, and I will be your God. And I will deliver you from all your uncleannesses. And I will summon the grain and make it abundant and lay no famine upon you. (Ezekiel‬ ‭36:26‭-‬29‬ ‭ESV‬‬‬‬‬‬‬)</p>
    </blockquote>
    <p>At Pentecost (Acts 2), Jesus poured the promised Holy Spirit ((promised in John 14, 16, Acts 1), who is the primary agent of our Sanctification as referred in the above passage.</p>
    <p>Before His death, Jesus prayed to the Father for all his followers in John 17. He prays that we would be reunited with God and see Him (Jesus) in His glory. He also mentions: Sanctify them in the truth; your word is truth (John 17:17). It is impossible to be sanctified apart from truth, as Christ Himself said that, the truth will set us free and it is also impossible to be sanctified apart from the Spirit of God. The Bible supports this, since the Spirit of God is also the Spirit of truth and the Spirit is the one who inspired the Scripture (2 Peter 1:21, 2 Timothy 3:16-17)</p>
    <p>The Holy Spirit illuminates truth and glorifies Jesus(). That’s why before being born again of the Spirit, we couldn’t understand the Gospel and weren’t affected by Scripture as we are meant to.</p>
    <p>The Spirit lifts the veil, so we can see Christ and be saved, and sanctified. As it is written,</p>
    <blockquote>
      <p>But when one turns to the Lord, the veil is removed. Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom. And we all, with unveiled face, beholding the glory of the Lord, are being transformed into the same image from one degree of glory to another. For this comes from the Lord who is the Spirit.</p>
    </blockquote>
    <p>The Apostles knew this. Indeed Paul said:</p>
    <blockquote>
      <p>For this is the will of God, your sanctification: that you abstain from sexual immorality Galatians‬ ‭4:19‬ ‬ My little children, for whom I am again in the anguish of childbirth until Christ is formed in you! ‭‭‭‭Ephesians‬ ‭4:11‭-‬13‬ ‭ESV‬‬‬‬‬‬‬‬‬ And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ, until we all attain to the unity of the faith and of the knowledge of the Son of God, to mature manhood, to the measure of the stature of the fullness of Christ</p>
    </blockquote>
    <p>I do not know if you should go to this school or that school, or if you should take this job or that one. The Lord knows. But I want you to have peace. If you keep your eyes on the macro of God’s will, you won’t miss His lead on the micro. Even if you take a “detour” by mistake, He has taken that into account, You won’t mess it up. Peter denied Jesus three times and died as a martyr for the Gospel. God’s grace is enough for us. Only,  in humility, seek His face continually. He will be with you.</p>
  </div>
</body>
</html>`;

  return targetArticle ? (
    <ArticleContainer>
      <TitleContainer> {targetArticle.title} </TitleContainer>
      <Content dangerouslySetInnerHTML={{ __html: blogArticleHTML }}/>
    </ArticleContainer>
  ) : (
    <NotFound />
  );
};

export default ArticlePage;
