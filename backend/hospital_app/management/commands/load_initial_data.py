import os
import shutil
from django.core.management.base import BaseCommand
from django.conf import settings
from django.core.files import File
from hospital_app.models import HospitalInfo, Service, Doctor, HospitalImage

class Command(BaseCommand):
    help = 'Popula o banco de dados com informações iniciais extraídas do frontend e do arquivo Informações.txt'

    def handle(self, *args, **options):
        self.stdout.write(self.style.WARNING("Iniciando carga de dados..."))

        # 1. Definir caminhos de origem e destino para as imagens
        base_dir = settings.BASE_DIR
        frontend_images_dir = base_dir.parent / 'frontend' / 'src' / 'assets' / 'images'
        
        media_hospital_dir = settings.MEDIA_ROOT / 'hospital'
        media_doctors_dir = settings.MEDIA_ROOT / 'doctors'
        
        # Criar os diretórios de mídia de destino, se não existirem
        os.makedirs(media_hospital_dir, exist_ok=True)
        os.makedirs(media_doctors_dir, exist_ok=True)

        self.stdout.write("Copiando imagens para a pasta de mídias...")
        
        # Função auxiliar para copiar arquivos
        def copy_image(src_name, dest_dir, dest_name=None):
            src_path = frontend_images_dir / src_name
            if not dest_name:
                dest_name = src_name
            dest_path = dest_dir / dest_name
            
            if os.path.exists(src_path):
                shutil.copy2(src_path, dest_path)
                return dest_path
            else:
                # Se não achar o arquivo no frontend, busca na pasta doctors se aplicável
                src_path_alt = frontend_images_dir / 'doctors' / src_name
                if os.path.exists(src_path_alt):
                    shutil.copy2(src_path_alt, dest_path)
                    return dest_path
                self.stdout.write(self.style.ERROR(f"Aviso: Imagem de origem não encontrada: {src_path}"))
                return None

        # Copiar imagens gerais
        img_hospital1 = copy_image('hospital1.png', media_hospital_dir)
        img_hospital2 = copy_image('hospital2.png', media_hospital_dir)
        img_sobre_recep = copy_image('sobre_recep.png', media_hospital_dir)
        img_logo = copy_image('logo_hosp.png', media_hospital_dir)
        
        # Copiar imagens dos médicos
        img_doc1 = copy_image('doctor1.png', media_doctors_dir)
        img_doc2 = copy_image('doctor2.png', media_doctors_dir)
        img_doc3 = copy_image('doctor3.png', media_doctors_dir)

        # 2. Popular HospitalInfo
        HospitalInfo.objects.all().delete()
        hospital_info = HospitalInfo.objects.create(
            name="Hospital Nossa Senhora do Brasil",
            address="Rua Dr. Mário Campos, 80, Centro, Bambuí - MG",
            phone="(37) 3417-0241", # Da linha 19 e 28 de Informações.txt
            email="hospitalnsbrasil@yahoo.com.br", # Da linha 27 de Informações.txt
            instagram="@hospitalnsbrasil",
            facebook="Hospital Nossa Senhora do Brasil",
            pix_key="hospitalnsbrasil@yahoo.com.br", # Do arquivo Informações.txt
            working_hours="Atendimento 24 horas",
            about_title="Compromisso com a saúde e o bem-estar da comunidade.",
            about_text_1="O Hospital Nossa Senhora do Brasil atua oferecendo atendimento humanizado, estrutura moderna e uma equipe preparada para atender pacientes com qualidade, ética e responsabilidade.",
            about_text_2="Nosso compromisso é promover um atendimento seguro, acolhedor e eficiente, colocando sempre o paciente no centro do cuidado.",
            mission="Promover atendimento humanizado e de excelência.",
            vision="Ser referência regional em qualidade hospitalar.",
            values="Ética, respeito, compromisso e inovação."
        )
        self.stdout.write(self.style.SUCCESS("Informações do Hospital criadas com sucesso!"))

        # 3. Popular Serviços
        Service.objects.all().delete()
        
        services_data = [
            # Serviços de Informações.txt
            {
                'title': "Exames de Imagem",
                'text': "Diagnósticos precisos através de exames modernos: RAIO-X, ULTRASSOM, TOMOGRAFIA, ECG.",
                'icon': "FaXRay",
                'category': "imagem"
            },
            {
                'title': "Exames Laboratoriais",
                'text': "Análises clínicas completas e ágeis com resultados precisos para apoio diagnóstico.",
                'icon': "FaFlask",
                'category': "laboratorial"
            },
            {
                'title': "Consultas Médicas Especializadas",
                'text': "Atendimento médico em diversas especialidades com horário marcado.",
                'icon': "FaStethoscope",
                'category': "consulta"
            },
            {
                'title': "Administração de Medicamentos",
                'text': "Aplicação de medicamentos injetáveis e orais sob prescrição médica em ambiente controlado e seguro.",
                'icon': "FaHeartbeat",
                'category': "medicamento"
            },
            {
                'title': "Cirurgias",
                'text': "Estrutura cirúrgica adequada para procedimentos de baixa e média complexidade.",
                'icon': "FaProcedures",
                'category': "cirurgia"
            },
            {
                'title': "Plantão Médico 24 Horas",
                'text': "Corpo clínico de plantão disponível initerruptamente para urgências e emergências.",
                'icon': "FaAmbulance",
                'category': "plantao"
            },
            # Serviços genéricos adicionais do front
            {
                'title': "Clínica Médica",
                'text': "Atendimento clínico geral focado na prevenção, diagnóstico e tratamento continuado de doenças.",
                'icon': "FaUserMd",
                'category': "geral"
            },
            {
                'title': "Cardiologia",
                'text': "Cuidados e avaliações especializadas para a prevenção e tratamento da saúde cardiovascular.",
                'icon': "FaHeartbeat",
                'category': "geral"
            },
            {
                'title': "Pediatria",
                'text': "Atendimento médico dedicado à saúde, crescimento e bem-estar de crianças e adolescentes.",
                'icon': "FaBaby",
                'category': "geral"
            },
            {
                'title': "Internação",
                'text': "Estrutura de leitos preparada para internações clínicas e cirúrgicas com conforto e segurança.",
                'icon': "FaProcedures",
                'category': "geral"
            }
        ]
        
        for s in services_data:
            Service.objects.create(**s)
        self.stdout.write(self.style.SUCCESS(f"{len(services_data)} Serviços criados com sucesso!"))

        # 4. Popular Médicos (de Informações.txt + nomes fictícios)
        Doctor.objects.all().delete()
        
        doctors_data = [
            {
                'name': "Dr. Carlos Eduardo Silva",
                'specialty': "CLINICO GERAL",
                'phone': "(37) 3417-0241",
                'crm': "MG-54321",
                'img_file': 'doctor1.png'
            },
            {
                'name': "Dra. Ana Beatris Souza",
                'specialty': "ORTOPEDISTA",
                'phone': "(37) 3417-0241",
                'crm': "MG-65432",
                'img_file': 'doctor2.png'
            },
            {
                'name': "Dr. Roberto Vasconcelos",
                'specialty': "MÉDICO COM ATUAÇÃO EM CIRCULAÇÃO, VARIZES E SAÚDE VASCULAR",
                'phone': "(37) 3417-0241",
                'crm': "MG-76543",
                'img_file': 'doctor3.png'
            },
            {
                'name': "Dra. Helena Moreira",
                'specialty': "MÉDICO EM SAÚDE MENTAL",
                'phone': "(37) 3417-0241",
                'crm': "MG-87654",
                'img_file': 'doctor1.png'
            },
            {
                'name': "Dr. Marcos Guimarães",
                'specialty': "GASTROENTEROLOGISTA",
                'phone': "(37) 3417-0241",
                'crm': "MG-98765",
                'img_file': 'doctor2.png'
            },
            {
                'name': "Dra. Julia Pinheiro",
                'specialty': "DERMATOLOGISTA",
                'phone': "(37) 3417-0241",
                'crm': "MG-10987",
                'img_file': 'doctor3.png'
            },
            {
                'name': "Dr. Fernando Andrade",
                'specialty': "NEUROLOGISTA",
                'phone': "(37) 3417-0241",
                'crm': "MG-21098",
                'img_file': 'doctor1.png'
            },
            {
                'name': "Dr. Ricardo Santos",
                'specialty': "ANESTESISTA",
                'phone': "(37) 3417-0241",
                'crm': "MG-32109",
                'img_file': 'doctor2.png'
            }
        ]

        for d in doctors_data:
            img_file_name = d.pop('img_file')
            doc = Doctor.objects.create(**d)
            
            # Associar imagem se ela foi copiada com sucesso
            dest_img_path = media_doctors_dir / img_file_name
            if os.path.exists(dest_img_path):
                with open(dest_img_path, 'rb') as f:
                    doc.image.save(img_file_name, File(f), save=True)

        self.stdout.write(self.style.SUCCESS(f"{len(doctors_data)} Médicos criados com sucesso!"))

        # 5. Popular Imagens do Hospital
        HospitalImage.objects.all().delete()
        
        images_data = [
            {
                'title': "Hospital Nossa Senhora do Brasil - Início",
                'img_file': 'hospital1.png',
                'description': "Vista principal da fachada do Hospital Nossa Senhora do Brasil."
            },
            {
                'title': "Hospital Nossa Senhora do Brasil - Sobre",
                'img_file': 'hospital2.png',
                'description': "Estrutura e instalações do Hospital Nossa Senhora do Brasil."
            },
            {
                'title': "Hospital Nossa Senhora do Brasil - Recepção Sobre",
                'img_file': 'sobre_recep.png',
                'description': "Recepção e atendimento humanizado do Hospital Nossa Senhora do Brasil."
            }
        ]

        for img in images_data:
            img_file_name = img.pop('img_file')
            h_img = HospitalImage.objects.create(**img)
            
            dest_img_path = media_hospital_dir / img_file_name
            if os.path.exists(dest_img_path):
                with open(dest_img_path, 'rb') as f:
                    h_img.image.save(img_file_name, File(f), save=True)

        self.stdout.write(self.style.SUCCESS("Imagens do hospital salvas com sucesso!"))
        self.stdout.write(self.style.SUCCESS("Carga de dados concluída!"))
