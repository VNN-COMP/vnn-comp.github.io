// VNN-COMP Website JavaScript

// Tools data for all VNN-COMP years
const toolsData = {
    2026: [
        // Tools will be added as they register for VNN-COMP 2026
    ],
    2025: [
        { name: "α,β-CROWN", url: "https://github.com/Verified-Intelligence/alpha-beta-CROWN" },
        { name: "CORA", url: "https://cora.in.tum.de/" },
        { name: "NeuralSAT", url: "https://github.com/dynaroars/neuralsat" },
        { name: "nnenum", url: "https://github.com/stanleybak/nnenum" },
        { name: "NNV", url: "https://github.com/verivital/nnv" },
        { name: "PyRAT", url: "https://pyrat-analyzer.com/" },
        { name: "Rover", url: null },
        { name: "SobolBox", url: "https://github.com/dassarthak18/SobolBox" }
    ],
    2024: [
        { name: "α,β-CROWN", url: "https://github.com/Verified-Intelligence/alpha-beta-CROWN" },
        { name: "CORA", url: "https://cora.in.tum.de/" },
        { name: "Marabou", url: "https://github.com/NeuralNetworkVerification/Marabou" },
        { name: "ModelVerification.jl", url: "https://github.com/intelligent-control-lab/ModelVerification.jl" },
        { name: "NeuralSAT", url: "https://github.com/dynaroars/neuralsat" },
        { name: "neVer2", url: "https://github.com/NeVerTools/NeVer2" },
        { name: "nnenum", url: "https://github.com/stanleybak/nnenum" },
        { name: "NNV", url: "https://github.com/verivital/nnv" },
        { name: "PyRAT", url: "https://pyrat-analyzer.com/" }
    ],
    2023: [
        { name: "α,β-CROWN", url: "https://github.com/Verified-Intelligence/alpha-beta-CROWN" },
        { name: "FastBATLLNN", url: "https://github.com/jferlez/FastBATLLNN" },
        { name: "Marabou", url: "https://github.com/NeuralNetworkVerification/Marabou" },
        { name: "NeuralSAT", url: "https://github.com/dynaroars/neuralsat" },
        { name: "nnenum", url: "https://github.com/stanleybak/nnenum" },
        { name: "NNV", url: "https://github.com/verivital/nnv" },
        { name: "PyRAT", url: "https://pyrat-analyzer.com/" }
    ],
    2022: [
        { name: "α,β-CROWN", url: "https://github.com/Verified-Intelligence/alpha-beta-CROWN" },
        { name: "AVeriNN", url: "https://github.com/vishnuteja97/AVeriNN" },
        { name: "CGDTest", url: null },
        { name: "Debona", url: "https://github.com/ChristopherBrix/Debona" },
        { name: "FastBATLLNN", url: "https://github.com/jferlez/FastBATLLNN" },
        { name: "Marabou", url: "https://github.com/NeuralNetworkVerification/Marabou" },
        { name: "MN-BaB", url: "https://github.com/eth-sri/mn-bab" },
        { name: "nnenum", url: "https://github.com/stanleybak/nnenum" },
        { name: "PeregriNN", url: "https://github.com/rcpsl/PeregriNN" },
        { name: "VeriaPak", url: null },
        { name: "VeriNet", url: "https://github.com/vas-group-imperial/VeriNet" }
    ],
    2021: [
        { name: "α,β-CROWN", url: "https://github.com/Verified-Intelligence/alpha-beta-CROWN" },
        { name: "Debona", url: "https://github.com/ChristopherBrix/Debona" },
        { name: "DNNF", url: "https://github.com/dlshriver/dnnf" },
        { name: "ERAN", url: "https://github.com/eth-sri/eran" },
        { name: "Marabou", url: "https://github.com/NeuralNetworkVerification/Marabou" },
        { name: "NN-R", url: null },
        { name: "nnenum", url: "https://github.com/stanleybak/nnenum" },
        { name: "NNV", url: "https://github.com/verivital/nnv" },
        { name: "NV.jl", url: "https://github.com/sisl/NeuralVerification.jl" },
        { name: "OVAL", url: "https://github.com/oval-group/oval-bab" },
        { name: "randgen", url: null },
        { name: "RPM", url: "https://github.com/StanfordMSL/Neural-Network-Reach" },
        { name: "Venus2", url: "https://github.com/vas-group-imperial/venus" },
        { name: "VeriNet", url: "https://github.com/vas-group-imperial/VeriNet" }
    ],
    2020: [
        { name: "ARFramework", url: "https://github.com/formal-verification-research/ARFramework" },
        { name: "auto_LiRPA", url: "https://github.com/Verified-Intelligence/auto_LiRPA" },
        { name: "CROWN-IBP", url: "https://github.com/huanzhang12/CROWN-IBP" },
        { name: "DNNV", url: "https://github.com/dlshriver/DNNV" },
        { name: "ERAN", url: "https://github.com/eth-sri/eran" },
        { name: "Marabou", url: "https://github.com/NeuralNetworkVerification/Marabou" },
        { name: "MIPVerify.jl", url: "https://github.com/vtjeng/MIPVerify.jl" },
        { name: "Neurify", url: "https://github.com/tcwangshiqi-columbia/Neurify" },
        { name: "nnenum", url: "https://github.com/stanleybak/nnenum" },
        { name: "NNV", url: "https://github.com/verivital/nnv" },
        { name: "NPAQ", url: "https://github.com/teobaluta/NPAQ" },
        { name: "PaRoT", url: null },
        { name: "PeregriNN", url: "https://github.com/rcpsl/PeregriNN" },
        { name: "PLNN", url: "https://github.com/oval-group/PLNN-verification" },
        { name: "ReluVal", url: "https://github.com/tcwangshiqi-columbia/ReluVal" },
        { name: "Sherlock", url: "https://github.com/souradeep-111/sherlock_2" },
        { name: "Venus", url: "https://github.com/vas-group-imperial/venus" },
        { name: "VeriNet", url: "https://github.com/vas-group-imperial/VeriNet" }
    ]
};

// Generate aggregated tool data for the participants table
function generateAggregatedToolData() {
    const allTools = {};
    const years = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

    years.forEach(year => {
        toolsData[year].forEach(tool => {
            const toolKey = tool.name.toLowerCase();
            if (!allTools[toolKey]) {
                allTools[toolKey] = {
                    name: tool.name,
                    url: tool.url,
                    years: {}
                };
            }
            allTools[toolKey].years[year] = true;
            // Update URL if we have a better one
            if (tool.url && !allTools[toolKey].url) {
                allTools[toolKey].url = tool.url;
            }
        });
    });

    // Convert to array and sort by number of years participated (descending), then alphabetically
    return Object.values(allTools).sort((a, b) => {
        const aYears = Object.keys(a.years).length;
        const bYears = Object.keys(b.years).length;
        if (bYears !== aYears) return bYears - aYears;
        return a.name.localeCompare(b.name);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to header
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(102, 126, 234, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        timelineObserver.observe(item);
    });

    // Animate repository cards on scroll
    const repoCards = document.querySelectorAll('.repo-card');
    
    const repoObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    repoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        repoObserver.observe(card);
    });

    // Add hover effects to statistics
    const stats = document.querySelectorAll('.stat');
    
    stats.forEach(stat => {
        const number = stat.querySelector('.stat-number');
        const originalNumber = number.textContent;
        
        stat.addEventListener('mouseenter', function() {
            if (originalNumber.includes('+')) {
                // Animate the number
                const baseNumber = parseInt(originalNumber.replace('+', ''));
                let current = 0;
                const increment = baseNumber / 20;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= baseNumber) {
                        number.textContent = originalNumber;
                        clearInterval(timer);
                    } else {
                        number.textContent = Math.floor(current) + '+';
                    }
                }, 50);
            }
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Press 'h' to go to top
        if (e.key === 'h' && !e.ctrlKey && !e.altKey) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        // Press 'c' to go to competitions
        if (e.key === 'c' && !e.ctrlKey && !e.altKey) {
            document.querySelector('#competitions').scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        // Press 'r' to go to repositories
        if (e.key === 'r' && !e.ctrlKey && !e.altKey) {
            document.querySelector('#repositories').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    // Add search functionality for repository years
    function addSearchFunctionality() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search by year...';
        searchInput.style.cssText = `
            width: 100%;
            max-width: 300px;
            padding: 10px 15px;
            margin-bottom: 2rem;
            border: 2px solid #e2e8f0;
            border-radius: 25px;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.3s ease;
        `;
        
        const repoSection = document.querySelector('#repositories .container');
        const repoGrid = document.querySelector('.repo-grid');
        
        repoSection.insertBefore(searchInput, repoGrid);
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const repoCards = document.querySelectorAll('.repo-card');
            
            repoCards.forEach(card => {
                const year = card.querySelector('.repo-year').textContent.toLowerCase();
                if (year.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
        
        searchInput.addEventListener('focus', function() {
            this.style.borderColor = '#667eea';
        });
        
        searchInput.addEventListener('blur', function() {
            this.style.borderColor = '#e2e8f0';
        });
    }
    
    // Initialize search functionality
    addSearchFunctionality();

    // Populate tools lists for each year
    function populateToolsLists() {
        const years = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

        years.forEach(year => {
            const toolsList = document.getElementById('tools-' + year);
            if (toolsList && toolsData[year]) {
                const grid = document.createElement('div');
                grid.className = 'tools-list-grid';

                toolsData[year].forEach(tool => {
                    if (tool.url) {
                        const link = document.createElement('a');
                        link.href = tool.url;
                        link.target = '_blank';
                        link.textContent = tool.name;
                        grid.appendChild(link);
                    } else {
                        const span = document.createElement('span');
                        span.className = 'tool-no-link';
                        span.textContent = tool.name;
                        grid.appendChild(span);
                    }
                });

                toolsList.appendChild(grid);
            }
        });
    }

    // Toggle tools list visibility
    function setupToolsToggle() {
        document.querySelectorAll('.tools-toggle').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const year = this.dataset.year;
                const toolsList = document.getElementById('tools-' + year);

                if (toolsList) {
                    toolsList.classList.toggle('expanded');
                    this.classList.toggle('active');
                }
            });
        });
    }

    // Populate participants table
    function populateParticipantsTable() {
        const tableBody = document.getElementById('participants-table-body');
        if (!tableBody) return;

        const aggregatedData = generateAggregatedToolData();
        const years = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

        aggregatedData.forEach(tool => {
            const row = document.createElement('tr');

            // Tool name cell
            const nameCell = document.createElement('td');
            if (tool.url) {
                const link = document.createElement('a');
                link.href = tool.url;
                link.target = '_blank';
                link.className = 'tool-link';
                link.textContent = tool.name;
                nameCell.appendChild(link);
            } else {
                nameCell.textContent = tool.name;
            }
            row.appendChild(nameCell);

            // Year cells
            years.forEach(year => {
                const cell = document.createElement('td');
                if (tool.years[year]) {
                    cell.innerHTML = '<span class="checkmark">&#10003;</span>';
                } else {
                    cell.innerHTML = '<span class="no-participation">-</span>';
                }
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });
    }

    // Initialize tools functionality
    populateToolsLists();
    setupToolsToggle();
    populateParticipantsTable();

    // Add keyboard shortcut for participants
    document.addEventListener('keydown', function(e) {
        if (e.key === 'p' && !e.ctrlKey && !e.altKey) {
            const participantsSection = document.querySelector('#participants');
            if (participantsSection) {
                participantsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    console.log('VNN-COMP Website loaded successfully!');
});

// Copy BibTeX function
function copyBibtex() {
    const bibtexContent = document.getElementById('bibtex-content').textContent;
    navigator.clipboard.writeText(bibtexContent).then(() => {
        const btn = document.querySelector('.copy-bibtex-btn');
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy BibTeX:', err);
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = bibtexContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        const btn = document.querySelector('.copy-bibtex-btn');
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = 'Copy All';
            btn.classList.remove('copied');
        }, 2000);
    });
}

// Add utility functions for potential future use
window.VNNComp = {
    scrollToSection: function(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    },
    
    highlightYear: function(year) {
        const yearCard = document.querySelector(`#repo-${year}`);
        if (yearCard) {
            yearCard.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            yearCard.style.color = 'white';
            
            setTimeout(() => {
                yearCard.style.background = 'white';
                yearCard.style.color = '#333';
            }, 2000);
        }
    }
};