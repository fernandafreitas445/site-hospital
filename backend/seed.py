import os
import django
import datetime

# Configurar o ambiente Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'hospital_project.settings')
django.setup()

from core.models import HospitalInfo, Doctor, Achievement, DonationCampaign, DonationMethod

def seed_db():
    print("Iniciando população do banco de dados...")

    # 1. Informações do Hospital
    if not HospitalInfo.objects.exists():
        HospitalInfo.objects.create(
            nome="Hospital Nossa Senhora do Brasil",
            historia=(
                "Fundado em 1985 na cidade de Bambuí, o Hospital Nossa Senhora do Brasil "
                "nasceu do sonho de oferecer saúde de qualidade e atendimento humanizado para "
                "toda a população regional. Ao longo de mais de 40 anos, crescemos, modernizamos "
                "nossas instalações e expandimos nossas especialidades, tornando-nos referência "
                "em cuidado médico, carinho e dedicação com o paciente."
            ),
            missao="Oferecer assistência hospitalar de excelência, promovendo a saúde e o bem-estar com humanização, ética e sustentabilidade.",
            visao="Ser reconhecido como o principal centro hospitalar da região em segurança do paciente, inovação e acolhimento até 2030.",
            valores="Humanização, Excelência, Ética, Compromisso Social, Segurança do Paciente e Respeito à Vida.",
            endereco="Av. Armando Franco, 350 - Centro, Bambuí - MG, 38900-000",
            telefone="(37) 3431-0000",
            email="contato@hospitalnsbrasil.com.br",
            instagram="hospitalnsbrasil",
            facebook="hospitalnsbrasil",
            horario_funcionamento="Atendimento 24 horas (Pronto Socorro) | Visitas das 14h às 17h"
        )
        print("-> Informações do hospital criadas!")
    else:
        print("-> Informações do hospital já existem.")

    # 2. Médicos
    if not Doctor.objects.exists():
        doctors_data = [
            {
                "nome": "Dr. João Silva",
                "especialidade": "Clínica Médica",
                "crm": "MG 12345",
                "biografia": (
                    "Dr. João Silva é graduado pela UFMG, com mais de 15 anos de experiência "
                    "em clínica médica e terapia intensiva. Dedica-se a fornecer um atendimento "
                    "integral e preventivo, focado no bem-estar de longo prazo dos seus pacientes."
                ),
                "ativo": True
            },
            {
                "nome": "Dra. Ana Oliveira",
                "especialidade": "Cardiologia",
                "crm": "MG 67890",
                "biografia": (
                    "Dra. Ana Oliveira é especialista em cardiologia pela USP, com foco em "
                    "cardiologia preventiva e exames diagnósticos complexos. Integra nossa equipe "
                    "há 8 anos, liderando projetos de saúde cardiovascular na comunidade."
                ),
                "ativo": True
            },
            {
                "nome": "Dr. Carlos Souza",
                "especialidade": "Pediatria",
                "crm": "MG 54321",
                "biografia": (
                    "Dr. Carlos é apaixonado pelo cuidado infantil. Formado pela UFRJ, tem especialização "
                    "em pediatria e neonatologia. Atua no acolhimento de bebês e crianças com carinho, "
                    "paciência e rigor científico."
                ),
                "ativo": True
            },
            {
                "nome": "Dra. Mariana Costa",
                "especialidade": "Ginecologia e Obstetrícia",
                "crm": "MG 98765",
                "biografia": (
                    "Dra. Mariana Costa atua na saúde da mulher com dedicação há 10 anos. "
                    "Especialista em pré-natal de alto risco e cirurgia ginecológica minimamente invasiva."
                ),
                "ativo": True
            }
        ]
        for doc in doctors_data:
            Doctor.objects.create(**doc)
        print("-> Médicos criados!")
    else:
        print("-> Médicos já existem.")

    # 3. Realizações / Projetos
    if not Achievement.objects.exists():
        achievements_data = [
            {
                "titulo": "Nova Ala Pediátrica Inaugurada",
                "descricao": (
                    "Inauguramos nossa nova ala pediátrica equipada com tecnologia de ponta e leitos "
                    "decorados de forma lúdica, proporcionando um ambiente acolhedor e menos estressante "
                    "para nossas crianças durante o tratamento."
                ),
                "data_realizacao": datetime.date(2025, 10, 15)
            },
            {
                "titulo": "Aquisição de Tomógrafo de Última Geração",
                "descricao": (
                    "Com recursos próprios e doações da comunidade, adquirimos um tomógrafo computadorizado "
                    "multislice que reduz o tempo de exame e a exposição à radiação, otimizando os diagnósticos."
                ),
                "data_realizacao": datetime.date(2024, 6, 20)
            },
            {
                "titulo": "Prêmio Regional de Qualidade no Atendimento",
                "descricao": (
                    "Fomos honrados com o Prêmio Regional de Excelência em Saúde Pública pela dedicação da "
                    "nossa equipe no combate a endemias e no pronto atendimento humanizado aos pacientes."
                ),
                "data_realizacao": datetime.date(2023, 11, 5)
            }
        ]
        for ach in achievements_data:
            Achievement.objects.create(**ach)
        print("-> Realizações criadas!")
    else:
        print("-> Realizações já existem.")

    # 4. Campanhas de Doação
    if not DonationCampaign.objects.exists():
        DonationCampaign.objects.create(
            titulo="Campanha de Reforma do Berçário",
            descricao=(
                "Nossa ala de maternidade precisa de novos berços aquecidos, monitores neonatais e "
                "reforma estrutural para acolher os recém-nascidos de Bambuí com o máximo de conforto "
                "e segurança nos seus primeiros dias de vida. Cada contribuição é um passo para o futuro!"
            ),
            chave_pix="pix@hospitalnsbrasil.com.br",
            beneficiario="Hospital Nossa Senhora do Brasil LTDA",
            ativa=True
        )
        DonationCampaign.objects.create(
            titulo="Aquisição de Insumos e EPIs",
            descricao=(
                "Campanha contínua para apoiar a aquisição de insumos básicos e equipamentos de proteção "
                "individual de alta qualidade para nossos enfermeiros e médicos do pronto-socorro."
            ),
            chave_pix="37343100000001 (CNPJ)",
            beneficiario="Hospital Nossa Senhora do Brasil LTDA",
            ativa=True
        )
        print("-> Campanhas de doação criadas!")
    else:
        print("-> Campanhas de doação já existem.")

    # 5. Formas de Doação Fixas
    if not DonationMethod.objects.exists():
        DonationMethod.objects.create(
            tipo="PIX Institucional",
            descricao="Chave CNPJ: 37.343.100/0001-00",
            instrucoes="Acesse o app do seu banco, escolha a opção PIX, escaneie o QR Code ou insira a chave CNPJ do Hospital. Confirme o beneficiário antes de enviar."
        )
        DonationMethod.objects.create(
            tipo="Conta Corrente Bancária",
            descricao="Banco do Brasil - Agência: 1234-5 | Conta: 98765-4",
            instrucoes="Para transferências (TED/DOC), utilize os dados acima. Favorecido: Hospital Nossa Senhora do Brasil, CNPJ: 37.343.100/0001-00."
        )
        print("-> Formas de doação fixas criadas!")
    else:
        print("-> Formas de doação fixas já existem.")

    print("População do banco de dados concluída com sucesso!")

if __name__ == "__main__":
    seed_db()
