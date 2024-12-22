import time

class UnusualReports():
    def __init__(self):
        self.safeCount = 0

    def readReports(self, input):
        for line in input['content'].splitlines():
            if self.isSafeBidirectional(line.strip().split()):
                self.safeCount+=1
            else:
                continue
        return self
    
    def tolerateReports(self, input):
        for line in input['content'].splitlines():
            if self.isSafeBidirectional(line.strip().split()):
                self.safeCount+=1
            else:
                for i in range(len(line.strip().split())):                        
                    tolerateReport = line.strip().split()[:i] + line.strip().split()[i+ 1:]
                    if self.isSafeBidirectional(tolerateReport):
                        self.safeCount+=1
                        break
        return self
                    
    def isSafeSlidingWindow(self, report):
        inc, dec = True, True

        for i in range(1,len(report)):
            diff = int(report[i]) - int(report[i-1])

            if not (1<= abs(diff) <=3):
                return False

            if diff>0:
                dec = False
            elif diff < 0:
                inc = False

        return inc or dec

    def isSafeReports(self, report, idx=1, inc=True, dec=True):

        if idx == len(report):
            return inc or dec
        
        diff = int(report[idx]) - int(report[idx-1])

        if not (1 <= abs(diff) <= 3):
            return False

        if diff > 0:
            dec = False
        elif diff < 0:
            inc = False

        return self.isSafeReports(report, idx+1, inc, dec)
            

        

    def isSafeBidirectional(self, report):
        inc, dec = True, True
        n = len(report)

        for i in range(n//2):
            diff_front = int(report[i+1])-int(report[i])
            diff_back = int(report[-(i+1)])-int(report[-(i+2)])

            if not (1<= abs(diff_front) <=3) or not (1<= abs(diff_back) <=3):
                return False

            if diff_front > 0 or diff_back > 0:
                dec = False
            if diff_front < 0 or diff_back < 0:
                inc = False

        return inc or dec

    
# reports = UnusualReports()

# start_time = time.time()
# reports.readReports()
# end_time = time.time()
# elapsed_time_seconds = end_time - start_time
# elapsed_time_microseconds = elapsed_time_seconds * 1000000
# print(f"Elapsed time: {elapsed_time_microseconds} microseconds")
# print(str(reports.safeCount) + " safe reports")





            
                
        