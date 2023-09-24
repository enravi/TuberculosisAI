To address the issue of downloading files larger than 100 MB, you can add a section to your README.md file that provides guidance on how to handle large files, particularly those managed with Git LFS (Large File Storage). Here's an updated version of your README.md file with this information:

```markdown
# Tuberculosis Detection AI Project

## Overview

This project aims to develop an AI-based system for the detection of Tuberculosis (TB) in chest X-ray images. Tuberculosis is a contagious bacterial infection that primarily affects the lungs and can be life-threatening if not diagnosed and treated early. The goal of this project is to assist healthcare professionals in the early detection of TB through automated image analysis.

## Features

- Automated classification of chest X-ray images into TB-positive or TB-negative categories.
- User-friendly web application for uploading and analyzing X-ray images.
- Continuous Integration/Continuous Deployment (CI/CD) pipeline for efficient development and deployment.
- Monitoring and alerting to ensure system health and performance.

## Technologies Used

- Python
- TensorFlow for AI model development
- Flask for the web application
- Docker for containerization
- Jenkins for CI/CD automation
- Prometheus and Grafana for monitoring

## Handling Large Files

This project uses Git LFS (Large File Storage) for managing large files, such as AI model weights, that may exceed 100 MB in size. To work with large files in this repository, please follow these steps:

### Prerequisites

- Git LFS (Install from https://git-lfs.github.com/)

### Cloning the Repository

1. Clone this repository to your local machine:

   ```shell
   git clone <repository-url>
   cd TuberculosisAI
   ```

2. Ensure that Git LFS is initialized for this repository:

   ```shell
   git lfs install
   ```

### Downloading Large Files

- When you clone this repository, Git LFS will automatically download the large files.

- If you encounter issues while cloning, ensure that Git LFS is properly installed and initialized.

### Working with Large Files

- When you add or commit large files, Git LFS will manage them for you.

- To pull the latest changes with large files, use `git pull` as usual.

- To push your changes, use `git push`, and Git LFS will handle the large files.

By following these steps, you can work with large files seamlessly in this repository.

## Getting Started

### Prerequisites

- Python (3.x)
- Docker
- Git
- Jenkins (if setting up CI/CD)
- Prometheus and Grafana (if setting up monitoring)

### Installation

1. Build and run the Docker container:

   ```shell
   docker build -t <docker-image-name> .
   docker run -d -p 5000:5000 <docker-container-name:tag name>
   ```

2. Access the web application at http://localhost:5000

## Usage

1. Upload a chest X-ray image through the web application.
2. Wait for the AI model to process the image.
3. View the classification result (TB-positive or TB-negative) on the web interface.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

Ravi Rajvanshi (AI Enthusiast, DevOps Engineer, Web Developer)

## Contributors

- Dr. Rajiv Garg (Professor, Respiratory Medicine, KGMU, Lucknow)
- Akshaya Singh (DevOps Expert)

## Contact

For questions or inquiries, please contact at its.ravi@outlook.com.
```

This added section, "Handling Large Files," provides users with guidance on working with large files in your repository, especially when they encounter issues related to files exceeding 100 MB. It instructs them on using Git LFS and troubleshooting common problems.
