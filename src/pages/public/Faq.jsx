import { CardsFaq, CardsRedirectionsFaq, HeroFaq, Main, QuestionsFaq, SupportFaq } from "@/components";

function Faq() {
    return (
        <Main>
            <HeroFaq/>
            <CardsFaq/>
            <QuestionsFaq/>
            <SupportFaq/>
            <CardsRedirectionsFaq/>
        </Main>
    )
}

export default Faq;