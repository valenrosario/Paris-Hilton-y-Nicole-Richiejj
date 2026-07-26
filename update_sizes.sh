sed -i 's/h-96/aspect-[21\/9]/g' src/views/Home.tsx
sed -i 's/h-64/aspect-video/g' src/views/Home.tsx
sed -i 's/1920x1080/1920x823/g' src/views/Home.tsx
sed -i 's/1080x1920/800x450/g' src/views/Home.tsx

sed -i 's/h-64/aspect-[21\/9]/g' src/components/EpisodeModal.tsx
sed -i 's/h-48/aspect-video/g' src/components/EpisodeModal.tsx
sed -i 's/1920x1080/896x384/g' src/components/EpisodeModal.tsx
sed -i 's/1080x1080/800x450/g' src/components/EpisodeModal.tsx

