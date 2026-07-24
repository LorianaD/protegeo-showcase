import { SectionHeroContainer, Select } from "@/components/ui";
import ProtectedPersonSelect from "./ProtectedPersonSelect";

function HeroDashboard({ page }) {
    return (
        <SectionHeroContainer variant="dashboard">
            <div className="hero-container__header">
                <h2 className="hero-container__title">
                    {page.hero.title}
                </h2>

                <div className="hero-container__cta">
                    {page.hero.option?.personName && (
                        <ProtectedPersonSelect
                            placeholder={page.hero.option.personName}
                            variant="dashboard"
                        />
                    )}

                    {page.hero.option?.annual && (
                        <Select
                            placeholder={page.hero.option.annual}
                            variant="dashboard"
                        />
                    )}
                </div>
            </div>

            {page.hero.description && (
                <p className="hero-container__description">
                    {page.hero.description}
                </p>
            )}
        </SectionHeroContainer>
    );
}

export default HeroDashboard;