import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        global: {
            loading: "Loading...",
            back_button: "Back"
        },
        header: {
            search_personality: "Search personality"
        },
        personality: {
            profile_button: "See profile",
            errorFetch: "Error while fetching Personality",
            add_button: "Add",
            affixButtonTitle: "Click here to add a claim"
        },
        footer: {
            copyright: "Aletheia ©2020 Created by Open Tesseract"
        },
        personalityCreateForm: {
            errorMessage: "Error while saving personality",
            successMessage: "profile created with success",
            successUpdate: "updated successfully",
            errorNameRequired: "Please insert a name",
            errorDescriptionRequired: "Please insert a description",
            errorFetch: "Error while fetching personality",
            errorUpdate: "Error while updating personality",
            description: "Description",
            name: "Name",
            wikidata: "Wikidata ID",
            saveButton: "Save personality",
            updateButton: "Update personality",
            clearButton: "Clear fields"
        },
        personalityCTA: {
            header: "Didn't find who you were looking for?",
            footer: "And help us grow our database!",
            button: "Add personality"
        },
        claimReviewForm: {
            titleEmpty: "Choose a sentence to review",
            title: "Review the sentence",
            selectLabel: "Review this claim",
            sourceLabel: "Provide a link to a reliable source",
            sourcePlaceholder: "Paste URL",
            addReviewButton: "Add review",
            placeholder: "Choose a classification",
            "not-fact": "Not fact",
            true: "True",
            "true-but": "True, but",
            arguable: "Arguable",
            misleading: "Misleading",
            false: "False",
            unsustainable: "Unsustainable",
            exaggerated: "Exaggerated",
            unverifiable: "Unverifiable",
            errorMessage: "Error while sending review",
            successMessage: "Review succeeded"
        },
        claim: {
            metricsHeaderTitle: "Metrics",
            metricsHeaderPrefix: "This speech contains ",
            metricsHeaderInfo: "{{totalReviews}} reviewed claims",
            metricsHeaderSuffix: ", of which:"
        },
        login: {
            formHeader: "Login to your account",
            emailLabel: "E-mail",
            passwordLabel: "Password",
            submitButton: "Submit",
            emailErrorMessage: "Please, insert your e-mail",
            passwordErrorMessage: "Please, insert your password",
            failed: "Unauthorized",
            signup: "Sign-up"
        },
        CTARegistration: {
            title: "Wanna be a reviewer?",
            body:
                "Wanna be a reviewer? Aletheia is currently on Beta Test and we are accepting all journalists and fact-checking professionals to test the platform!",
            footer:
                "Our goal is to be open for all users to add and review claims once tests are done. Keep it up with us on social media!",
            button: "Apply to be a reviewer"
        }
    },
    pt: {
        global: {
            loading: "Carregando...",
            back_button: "Voltar"
        },
        header: {
            search_personality: "Busque uma personalidade"
        },
        personality: {
            profile_button: "Veja o perfil",
            errorFetch: "Erro ao buscar Personalidade",
            add_button: "Inserir",
            affixButtonTitle: "Clique aqui para adicionar um discurso"
        },
        footer: {
            copyright: "Aletheia ©2020 Criado por Open Tesseract"
        },
        personalityCreateForm: {
            errorMessage: "Erro ao salvar personalidade",
            successMessage: "perfil criado com sucesso",
            successUpdate: "atualizado com sucesso",
            errorNameRequired: "Por favor, insira um nome",
            errorDescriptionRequired: "Por favor, insira uma descrição",
            errorFetch: "Erro ao buscar personalidade",
            errorUpdate: "Erro ao atualizar personalidade",
            description: "Descrição",
            name: "Nome",
            wikidata: "ID Wikidata",
            saveButton: "Salvar personalidade",
            updateButton: "Atualizar personalidade",
            clearButton: "Limpar campos"
        },
        personalityCTA: {
            header: "Não encontrou o que procurava?",
            footer: "e ajude-nos a aumentar o nosso banco de dados!",
            button: "Incluir personalidade"
        },
        claimReviewForm: {
            titleEmpty: "Escolha uma frase para revisar",
            title: "Classifique a frase",
            selectLabel: "Revise essa frase",
            sourceLabel: "Forneça um link de uma fonte confiável",
            sourcePlaceholder: "Cole uma URL",
            addReviewButton: "Adicione revisão",
            placeholder: "Selecione uma classificação",
            "not-fact": "Não é fato",
            true: "Verdadeiro",
            "true-but": "Verdadeiro, mas",
            arguable: "Discutível",
            misleading: "Enganoso",
            false: "Falso",
            unsustainable: "Insustentável",
            exaggerated: "Exagerado",
            unverifiable: "Inverificável",
            errorMessage: "Erro ao enviar revisão",
            successMessage: "Revisão concluída"
        },
        claim: {
            metricsHeaderTitle: "Avaliações",
            metricsHeaderPrefix: "Esse discurso contém ",
            metricsHeaderInfo: "{{totalReviews}} sentenças revisadas",
            metricsHeaderSuffix: ", das quais:"
        },
        login: {
            formHeader: "Acesse sua conta",
            emailLabel: "E-mail",
            passwordLabel: "Senha",
            submitButton: "Enviar",
            emailErrorMessage: "Por favor, insira seu e-mail",
            passwordErrorMessage: "Por favor, insira sua senha",
            failedMessage: "Login não autorizado",
            signup: "Registre-se"
        },
        CTARegistration: {
            title: "Quer ser um revisor?",
            body:
                "Aletheia está atualmente em teste beta e estamos aceitando todos os jornalistas e profissionais de checagem de fatos para testar a plataforma!",
            footer:
                "Nosso objetivo é estar aberto para que todos os usuários adicionem e revisem alegações assim que os testes forem concluídos. Acompanhe-nos nas redes sociais!",
            button: "Inscreva-se para ser um revisor"
        }
    },
    it: {
        global: {
            loading: "Caricamento...",
            back_button: "Indietro"
        },
        header: {
            search_personality: "Ricerca personalità"
        },
        personality: {
            profile_button: "Guarda il profilo",
            errorFetch: "Errore durante ricerca della personalità",
            add_button: "aggiungi",
            affixButtonTitle: "Premere qui per aggiungere una richiesta"
        },
        footer: {
            copyright: "Aletheia ©2020 Creato da Open Tesseract"
        },
        personalityCreateForm: {
            errorMessage: "Errore durante il salvataggio della personalità ",
            successMessage: "Profilo creato con successo",
            successUpdate: "Aggiornato con successo",
            errorNameRequired: "Per favore insierire un nome",
            errorDescriptionRequired: "Per favore insierire una descrizione",
            errorFetch: "Errore durante ricerca della personalità",
            errorUpdate: "Errore durante l'aggiornamento della personalità",
            description: "Descrizione",
            name: "Nome",
            wikidata: "Wikidata ID",
            saveButton: "Salva personalità",
            updateButton: "Aggiorna personalità",
            clearButton: "Svuota campi"
        },
        personalityCTA: {
            header: "Non hai trovato chi stavi cercando?",
            footer: "Aiutaci a far crescere il nostro database",
            button: "Aggiungi personalità"
        },
        claimReviewForm: {
            title: "Recensisci la dichiarazione",
            selectLabel: "Recensisci",
            sourceLabel: "Fornisci un link per convalidare la recensione",
            sourcePlaceholder: "Incolla URL",
            addReviewButton: "Aggiungi recensione",
            placeholder: "Classificala",
            "not-fact": "Non è un fattp",
            true: "Vero",
            "true-but": "Vero, ma",
            arguable: "discutibile",
            misleading: "Ingannevole",
            false: "Falso",
            unsustainable: "Insostenibile",
            exaggerated: "Esagerato",
            unverifiable: "Inverificabile",
            errorMessage: "Errore durante l'invio della recensione",
            successMessage: "Revisione inviata con successo"
        },
        claim: {
            metricsHeaderTitle: "Statistiche",
            metricsHeaderPrefix: "Questa dichiarazione contiene  ",
            metricsHeaderInfo: "{{totalReviews}} recensioni",
            metricsHeaderSuffix: ", delle quali:"
        }
    }
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
        resources,
        load: "languageOnly",
        fallbackLng: "en",
        lng: navigator.language || navigator.userLanguage,

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
