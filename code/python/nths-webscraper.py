#NTHS "Upcoming Events" web scraper
#Made by Maxwell Cohn on August 15, 2015 

#Scrapes North Tonawanda High School's web page and prints out the upcoming events section of the website
#ps: the website is horrible and is susceptible to sql injection

#uses requests and BeautifulSoup to get source code and then get only what is needed
from bs4 import BeautifulSoup
import requests

url="http://www.ntschools.org/Domain/72"

r  = requests.get(url)

data = r.text

soup = BeautifulSoup(data, "html.parser")

event = soup.find_all("span",{"class":"sw-calendar-block-title"})
day = soup.find_all("h1",{"class":"sw-calendar-block-date"})

for i in range(0, 6):
    print(day[i].text)
    print(event[i].text)
    print()

input()
